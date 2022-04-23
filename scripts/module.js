import {creature_builder_button, handle_token_drop, handle_token_clipboard, replace_token_button} from "./lib/lib.js"

Hooks.on("init", async function() {
    await game.keybindings.register("foundryvtt-pf2e-monster-maker", "clipboard", {
        name: "Paste Image from Clipboard",
        restricted: true,
        uneditable: [
            {key: "KeyV", modifiers: [ KeyboardManager.MODIFIER_KEYS.CONTROL]}
        ],
        onDown: () => {
            handle_token_clipboard()
        },
    });
})

Hooks.on("init", async function() {

})

Hooks.on('ready', async function() {
    await new DragDrop({
        callbacks: {
            drop: handle_token_drop
        }
    }).bind(document.getElementById("board"));

    await game.settings.register("foundryvtt-token-maker", "tokenDirectory", {
        name: "Download Directory",
        hint: "Set a Directory for tokens",
        scope: "world",
        config: true,
        type: String,
        filePicker: "folder",
        default: "",
    });
    await game.settings.register("foundryvtt-pf2e-monster-maker", "roadmaps", {
        scope: 'world',
        config: false,
        type: Object,
        default: {}
    });
    await game.settings.register("foundryvtt-pf2e-monster-maker", "traits", {
        scope: 'client',
        config: false,
        type: Object,
        default: {}
    });
})

Hooks.on('renderActorSheet', creature_builder_button);
Hooks.on('renderActorSheet', replace_token_button)
