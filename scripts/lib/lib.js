import {ApplyData} from "./apply_data.js"
<<<<<<< Updated upstream
import {abilities} from "./data/abilities.js"


=======
import {data} from "./data/abilities.js"


function equals(string_1, string_2) {
    return (string_1 === string_2);
}

function upper_case(string) {
    return string.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
    let template_keys = data["keys"]
    Handlebars.registerHelper('equals', equals);
    Handlebars.registerHelper('upper_case', upper_case)
    console.log(actor);
    button.on('click', async () => {
        new Dialog({
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
>>>>>>> Stashed changes
            }
        }).render(true);
    });
    element.after(button);
}