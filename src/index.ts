import {MonsterMaker} from "./MonsterMaker"
Hooks.on('init', async function () {
    await game["settings"].register("foundryvtt-pf2e-monster-maker", "roadmaps", {
        scope: 'world',
        config: false,
        type: Object,
        default: {}
    });
})

Hooks.on("renderActorSheet", async function (sheet, html) {
    let actor = sheet.object
    if (actor?.type !== "npc") {
        return;
    }
    if(!actor.canUserModify(game["user"], "update")) {
        return;
    }
    let element = html.find(".window-header .window-title");
    let button = $(`<a class="popout" style><i class="fas fa-book"></i>Monster Maker</a>`);
    button.on("click", () => {
        new MonsterMaker(actor).render(true)
    })
    element.after(button);
})

Hooks.on("renderActorDirectory", function() {
    let footer = $("#actors .directory-footer.action-buttons");
    let monsterButton = $(`<button><i class="fas fa-book"></i>Monster Maker</button>`);
    footer.append(monsterButton);

    monsterButton.on("click", function() {
        let monsterData = {
            name: "Monster",
            type: "npc",
        }
        Actor.create(monsterData).then(actor => {
            if (actor) {
                new MonsterMaker(actor).render(true);
            }
        });


    });
});