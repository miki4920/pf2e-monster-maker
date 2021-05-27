function enableCreatureBuilderButton(sheet, html) {
    // Only inject the link if the actor is of type "character" and the user has permission to update it
    const actor = sheet.actor;
    if (!(actor.data.type === 'npc' && actor.can(game.user, 'update'))) {
        return;
    }
    let element = html.find('.window-header .window-title');
    if (element.length !== 1) {
        return;
    }
    let button = $(`<a class="popout" style><i class="fas fa-book"></i>Creature Builder</a>`);
    button.on('click', () => {
    });
    element.after(button);
}