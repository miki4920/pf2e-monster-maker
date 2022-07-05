import {ApplyData} from "./apply_data.js"
import {data} from "./data/abilities.js"
import {apply_handlebars, apply_jquery} from "./handlebars.js"
import {Roadmap, save_road_map, handle_drop} from "./roadmap.js"

export function check_sheet(actor) {
    if (actor?.data.type === 'npc' && game.user.getUserLevel() === 3) {
        return true;
    }
}

async function create_dialog(actor) {
    let template_keys = data["keys"];
    let roadmaps = Roadmap.getItems()
    let dialog = new Dialog({
        content: await renderTemplate("modules/foundryvtt-pf2e-monster-maker/templates/monster_maker.html",
            {
                "template_keys": template_keys,
                "roadmaps": roadmaps
            }),
        buttons: {
            submit: {
                label: "Submit", callback: (html) => {
                    const results = new FormData(html.find("form")[0]);
                    const data_applier = new ApplyData(actor, results);
                    data_applier.apply_data();
                }
            },
            save: {
                label: "Save Roadmap", callback: (html) => {
                    const results = new FormData(html.find("form")[0])
                    save_road_map(results);
                }
            }
        }
    })
    await dialog._render(true);
    apply_jquery();
    new DragDrop({
        callbacks: {
            drop: handle_drop
        }
    }).bind(dialog.element[0]);
}


export function creature_builder_button(sheet, html) {
    const actor = sheet.actor;
    let element = html.find('.window-header .window-title');
    if (check_sheet(actor)) {
        let button = $(`<a class="popout" style><i class="fas fa-book"></i>Monster Maker</a>`);
        button.on('click', function () {
            apply_handlebars();
            create_dialog(actor)
        });
        element.after(button);
    }
}

function make_id() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 64; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

async function create_actor_token(path) {
    let actor = await Actor.create(
        {
            name: "Rename Me!",
            type: "npc",
            img: path
        });
    apply_handlebars();
    await create_dialog(actor);
}

async function change_actor_token(path, actor) {
    await actor.update({"img": path})
    await actor.update({"token.img": path})
}

export async function handle_token_clipboard(event, sheet) {
    if (!check_sheet(sheet.actor)){
        return;
    }
    if(sheet && !document.getElementById(sheet.options.id)) {
        await handle_token_clipboard(event, null)
        document.onpaste = async function(event){
            await handle_token_clipboard(event, null)
        }
    }
    else {
        let items = (event.clipboardData || event.originalEvent.clipboardData).items;
        for (let i=0; i < items.length; i++) {
            let item = items[i];
            if (item.kind === 'file') {
                let file = await new File([item.getAsFile()], make_id() + ".png");
                const file_path = game.settings.get("foundryvtt-token-maker", "tokenDirectory");
                await FilePicker.upload("data", file_path, file);
                let path = file_path + "/" + file.name
                if (!sheet) {
                    await create_actor_token(path)
                }
                else {
                    await change_actor_token(path, sheet.actor)
                }
            }
        }
    }

}