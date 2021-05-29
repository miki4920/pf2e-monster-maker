<<<<<<< Updated upstream
function creature_builder_button(sheet, html) {
=======
import {ApplyData} from "./apply_data.js"


export function creature_builder_button(sheet, html) {
>>>>>>> Stashed changes
    const actor = sheet.actor;
    if (!(actor.data.type === 'npc' && actor.can(game.user, 'update'))) {
        return;
    }
    let element = html.find('.window-header .window-title');
    if (element.length !== 1) {
        return;
    }
    let button = $(`<a class="popout" style><i class="fas fa-book"></i>Monster Maker</a>`);
    button.on('click', async () => {
<<<<<<< Updated upstream
        let monster_dialog = new Dialog({
            title: "",
            content: await renderTemplate("modules/foundryvtt-pf2e-monster-maker/templates/form.html", []),
            buttons: {
            one: {
                icon: '<i class="fas fa-save"></i>',
                    label: "Save",
                    callback: () => console.log("Chose One")
            },
            }})
        monster_dialog.render(true);
    });

=======
        new Dialog({
            content: await renderTemplate("modules/foundryvtt-pf2e-monster-maker/templates/form.html"),
            buttons: {
                submit: { label: "Submit", callback: (html) => {
                        const results = (new FormDataExtended(html.find("form")[0])).toObject();
                        const data_applier = new ApplyData(actor, results);
                        data_applier.apply_data();
                    }}
            }
        }).render(true);
    });
>>>>>>> Stashed changes
    element.after(button);
}