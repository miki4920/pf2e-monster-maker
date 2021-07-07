import {ApplyData} from "./apply_data.js"
import {data} from "./data/abilities.js"
import {apply_handlebars, set_collapsibles, set_apply_button} from "./handlebars.js"
import {Roadmap, save_road_map, handle_drop} from "./roadmap.js"
import {Trait} from "./trait.js"

function check_sheet(actor, element) {
    if (actor.data.type === 'npc' && actor.canUserModify(game.user, 'update')) {
        return true;
    }
    if (element.length === 1) {
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
    Trait.removeItems();
    Trait.removeItemsInHTML();
    set_collapsibles();
    set_apply_button();
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
        apply_handlebars();
        button.on('click', function () {
            create_dialog(actor)
        });
        element.after(button);
    }
}

export async function register_settings() {
    await game.settings.register("foundryvtt-pf2e-monster-maker", "roadmaps", {
        scope: 'world',
        config: false,
        type: Object,
        default: {}
    });

    await game.settings.register("foundryvtt-pf2e-monster-maker", "traits", {
        scope: 'client',
        config: false,
        type: Object,
        default: {}
    });
}