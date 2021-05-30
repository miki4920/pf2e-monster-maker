import {ApplyData} from "./apply_data.js"
import {abilities} from "./data/abilities.js"


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
    let template_abilities = Object.keys(abilities["abilities"]);
    button.on('click', async () => {
        new Dialog({
            content: await renderTemplate("modules/foundryvtt-pf2e-monster-maker/templates/form.html", {"template_abilities": template_abilities}),
            buttons: {
                submit: { label: "Submit", callback: (html) => {
                        const results = new FormData(html.find("form")[0]);
                        const data_applier = new ApplyData(actor, results);
                        data_applier.apply_data();
                    }}
            }
        }).render(true);
    });
    element.after(button);
}