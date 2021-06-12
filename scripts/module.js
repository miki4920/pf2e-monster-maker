import {creature_builder_button, register_settings} from "./lib/lib.js"

Hooks.on('ready', register_settings)
Hooks.on('renderActorSheet', creature_builder_button);
