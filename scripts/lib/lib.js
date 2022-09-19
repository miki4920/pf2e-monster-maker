import {ApplyData} from "./apply_data.js"
import {data} from "./data/abilities.js"
import {apply_handlebars, apply_jquery} from "./handlebars.js"
import {Roadmap, save_road_map, handle_drop} from "./roadmap.js"

export function check_sheet(actor) {
    if (actor?.data.type === 'npc') {
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
