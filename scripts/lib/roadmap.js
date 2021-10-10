import {get_name, get_traits} from "./form_getters.js"
import {Trait} from "./trait.js"
import {templates} from "./data/templates.js";


function get_roadmaps_object() {
    return game.settings.get("foundryvtt-pf2e-monster-maker", "roadmaps")
}

export function get_roadmaps_name() {
    let roadmaps = get_roadmaps_object();
    roadmaps = roadmaps.map(roadmap => roadmap["name"]).sort();
    return roadmaps
}

function get_roadmap(name) {
    let roadmaps = get_roadmaps_object();
    return roadmaps.find(element => element["name"] === name);
}

async function save_roadmap(roadmap) {
    let roadmaps = get_roadmaps_object();
    roadmaps.push(roadmap)
    await game.settings.set("foundryvtt-pf2e-monster-maker", "roadmaps", roadmaps);
}

export async function save_templates() {
    let roadmaps = get_roadmaps_object();
    templates.forEach(element => roadmaps.push(element))
    await game.settings.set("foundryvtt-pf2e-monster-maker", "roadmaps", roadmaps);
}

export function delete_roadmap(name) {
    let roadmaps = get_roadmaps_object();
    roadmaps = roadmaps.filter(element => element["name"] !== name);
    game.settings.set("foundryvtt-pf2e-monster-maker", "roadmaps", roadmaps);
}

export function handle_drop(event) {
    let data = JSON.parse(event.dataTransfer.getData("text/plain"))["data"];
    let item = data["name"];
    Trait.setItem(item, data);
}


export function roadmap(form) {
    let roadmap_data = {};
    let selections = [];
    for(let entry of form.entries()) {
         if(entry[0] !== "level" && entry[0] !== "name") {
             selections.push(entry[0] + "_" + entry[1]);
         }
    }
    roadmap_data["name"] = get_name(form);
    roadmap_data["selections"] = selections;
    roadmap_data["traits"] = get_traits();
    save_roadmap(roadmap_data);
}

export function apply_road_map(roadmap) {
    Trait.removeItems();
    roadmap = get_roadmap(roadmap);
    for(let id of roadmap["selections"]) {
        document.getElementById(id).checked = true;
    }
    let traits = roadmap["traits"];
    for(let data of Object.values(traits)) {
        let item = data["name"];
        Trait.setItem(item, data);
    }
}
