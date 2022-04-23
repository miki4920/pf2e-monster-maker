import {ApplyData} from "./apply_data.js"
import {data} from "./data/abilities.js"
import {apply_handlebars, apply_jquery} from "./handlebars.js"
import {Roadmap, save_road_map, handle_drop} from "./roadmap.js"

function check_sheet(actor, element) {
    if (actor.data.type === 'npc' && actor.canUserModify(game.user, 'update')) {
        return true;
    }
}

async function create_dialog(actor) {
    let template_keys = data["keys"];
    let roadmaps = Roadmap.getItems()
    let dialog = new Dialog({
        content: await renderTemplate("modules/foundryvtt-pf2e-monster-maker/templates/form.html",
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
    if (check_sheet(actor, element)) {
        let button = $(`<a class="popout" style><i class="fas fa-book"></i>Monster Maker</a>`);
        button.on('click', function () {
            apply_handlebars();
            create_dialog(actor)
        });
        element.after(button);
    }
}

export async function handle_token_drop(event) {
    if (event.dataTransfer.items) {
        for (let i = 0; i < event.dataTransfer.items.length; i++) {
            if (event.dataTransfer.items[i].kind === 'file') {
                event.preventDefault();
                await create_actor_from_file(event.dataTransfer.items[i].getAsFile())
            } else {
                await canvas._dragDrop.callbacks.drop(event);
            }
        }

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

export async function handle_token_clipboard() {
    let clip_items = await navigator.clipboard.read();
    for (let idx = 0; idx < clip_items[0].types.length; idx++) {
        const ftype = clip_items[0].types[idx];
        if (ftype.startsWith("image/")) {
            let blob = await clip_items[0].getType(ftype)
            let file = await new File([blob], make_id() + ".png")
            await create_actor_from_file(file);
        }
    }


}

async function create_actor_from_file(file) {
    const file_path = game.settings.get("foundryvtt-token-maker", "tokenDirectory");
    let path = file_path + "/" + file.name
    await FilePicker.upload("data", file_path, file);
    let actor = await Actor.create(
        {
            name: "Rename Me!",
            type: "npc",
            img: path
        });
    apply_handlebars();
    await create_dialog(actor);
}

async function replace_token(actor) {
    new Dialog({
        title: 'Example Dialog',
        content: `
    <form>
      <div class="form-group">
        <label>Image Url</label>
        <input type='text' name='url_input_field'/>
      </div>
    </form>`,
        buttons: {
            yes: {
                icon: "<i class='fas fa-check'></i>",
                label: `Apply Changes`,
            }
        },
        close: html => {
            let result = html.find('input[name=\'url_input_field\']');
            result = result.val();
            if (result !== "") {
                fetch(result, {
                    method: "GET",
                    headers: {
                        "x-requested-with": "foundry"
                    },
                }).then(res => res.blob())
                    .then(async blob => {
                        let file = await new File([blob], make_id() + ".png")
                        const file_path = game.settings.get("foundryvtt-token-maker", "tokenDirectory");
                        let path = file_path + "/" + file.name
                        await FilePicker.upload("data", file_path, file);
                        await actor.update({"img": path})
                        await actor.update({"token.img": path})

                    });
            }
        }
    }).render(true);
}

export function replace_token_button(sheet, html) {
    const actor = sheet.actor;
    let element = html.find('.window-header .window-title');
    if (check_sheet(actor, element)) {
        let button = $(`<a class="popout" style><i class="fas fa-book"></i>Replace Token</a>`);
        button.on('click', function () {
            replace_token(actor)
        });
        element.after(button);
    }
}