import {ApplyData} from "./apply_data.js"
import {data} from "./data/abilities.js"


function equals(string_1, string_2) {
    return (string_1 === string_2);
}

function upper_case(string) {
    return string.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

function handle_drop(event) {
    const data = JSON.parse(event.dataTransfer.getData("text/plain"))["data"];
    console.log(data);
}

export function creature_builder_button(sheet, html) {
    const actor = sheet.actor;
    if (!(actor.data.type === 'npc' && actor.can(game.user, 'update'))) {
        return;
    }
    let element = html.find('.window-header .window-title');
    if (element.length !== 1) {
        return;
    }
    let button = $(`<a class="popout" style><i class="fas fa-book"></i>Monster Maker</a>`);
    let template_keys = data["keys"]
    Handlebars.registerHelper('equals', equals);
    Handlebars.registerHelper('upper_case', upper_case)
    button.on('click', async () => {
        let dialog = new Dialog({
            content: await renderTemplate("modules/foundryvtt-pf2e-monster-maker/templates/form.html",
                {
                    "template_keys": template_keys,
                }),
            buttons: {
                submit: {
                    label: "Submit", callback: (html) => {
                        const results = new FormData(html.find("form")[0]);
                        const data_applier = new ApplyData(actor, results);
                        data_applier.apply_data();
                    }
                }
            }
        })
        await dialog._render(true);
        new DragDrop({
            callbacks: {
                drop: handle_drop
            }
        }).bind(dialog.element[0]);
    });
    element.after(button);
}