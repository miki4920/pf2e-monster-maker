import {MonsterMaker} from "./MonsterMaker"
Hooks.on('init', async function () {
    await game["settings"].register("foundryvtt-pf2e-monster-maker", "roadmaps", {
        scope: 'world',
        config: false,
        type: Object,
        default: {}
    });

    await game["settings"].register("pf2e-monster-maker", "abbreviateName", {
        name:    "Abbreviate Monster Maker",
        hint:    "Turn this on if you prefer to see “MM” instead of the full title “Monster Maker” in the monster sheet.",
        scope:   "world",
        config:  true,
        type:    Boolean,
        default: false
    });
})

function getMonsterManualLabel () {
    return game["settings"].get(
        "pf2e-monster-maker",
        "abbreviateName"
    ) ? "MM" : "Monster Maker";
}

Hooks.on("renderActorSheet", async function (sheet, html) {
    let actor = sheet.object
    if (actor?.type !== "npc") {
        return;
    }
    if(!actor.canUserModify(game["user"], "update")) {
        return;
    }
    let element = html.find(".window-header .window-title");
    let label = getMonsterManualLabel()
    let button = $(`<a class="popout" style><i style="padding: 0 4px;" class="fas fa-book"></i>${label}</a>`);
    button.on("click", () => {
        new MonsterMaker(actor).render(true)
    })
    element.after(button);
})

Hooks.on("renderActorDirectory", function() {
    let footer = $("#actors .directory-footer.action-buttons");
    if (footer.find("button:contains('Monster Maker')").length === 0) {
        let monsterButton = $(`<button><i class="fas fa-book"></i>Monster Maker</button>`);
        footer.append(monsterButton);

        monsterButton.on("click", function() {
            let monsterData = {
                name: "Monster",
                type: "npc",
            };
            Actor.create(monsterData).then(actor => {
                if (actor) {
                    new MonsterMaker(actor).render(true);
                }
            });
        });
    }
});