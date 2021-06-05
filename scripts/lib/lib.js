import {ApplyData} from "./apply_data.js"
import {data} from "./data/abilities.js"
import {apply_handlebars, set_collapsibles} from "./handlebars.js"
import {handle_drop} from "./on_drop.js"
import {save_road_map} from "./road_maps.js"

function check_sheet(actor, element) {
    if (!(actor.data.type === 'npc' && actor.can(game.user, 'update'))) {
        return true;
    }
    if (element.length !== 1) {
        return true;
    }
}

function remove_traits() {
    let traits = Object.keys(localStorage);
    for(let trait of traits) {
        if(trait.includes("monster_maker")) {
            localStorage.removeItem(trait);
        }
    }
}

async function create_dialog(actor) {
    let template_keys = data["keys"];
    let roadmaps = localStorage.getItem("roadmaps");
    if(!roadmaps) {
        roadmaps = {};
        localStorage.setItem("roadmaps", JSON.stringify(roadmaps))
    }
    let dialog = new Dialog({
        content: await renderTemplate("modules/foundryvtt-pf2e-monster-maker/templates/form.html",
            {
                "template_keys": template_keys,
                "roadmaps": Object.keys(JSON.parse(roadmaps))
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
                    const data_applier = new ApplyData(actor, results);
                    data_applier.apply_data();
                }
            }
        }
    })
    await dialog._render(true);
    set_collapsibles();
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
        return
    }
    let button = $(`<a class="popout" style><i class="fas fa-book"></i>Monster Maker</a>`);
    apply_handlebars();
    button.on('click', function () {
        remove_traits()
        create_dialog(actor)
    });
    element.after(button);
}