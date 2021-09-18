import {ApplyData} from "./apply_data.js"
import {data} from "./data/abilities.js"
import {apply_handlebars, apply_jquery} from "./handlebars.js"
import {get_roadmaps_name, roadmap, handle_drop, save_templates} from "./roadmap.js"

function check_sheet(actor) {
    if (actor.data.type === 'npc' && actor.canUserModify(game.user, 'update')) {
        return true;
    }
}

async function create_dialog(actor) {
    let template_keys = data["keys"];
    let roadmaps = get_roadmaps_name();
    let dialog = new Dialog({
        content: await renderTemplate("modules/foundryvtt-pf2e-monster-maker/templates/form.html",
            {
                "template_keys": template_keys,
                "roadmaps": roadmaps,
                "name": actor.name
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
                    roadmap(results);
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

export async function register_settings() {
    await game.settings.register("foundryvtt-pf2e-monster-maker", "roadmaps", {
        scope: 'world',
        config: false,
        type: Object,
        default: []
    });

    if(game.settings.get("foundryvtt-pf2e-monster-maker", "roadmaps").length === 0) {
        save_templates();
    }

    await game.settings.register("foundryvtt-pf2e-monster-maker", "traits", {
        scope: 'client',
        config: false,
        type: Object,
        default: []
    });
}