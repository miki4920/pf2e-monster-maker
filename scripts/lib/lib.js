function creature_builder_button(sheet, html) {
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

    element.after(button);
}