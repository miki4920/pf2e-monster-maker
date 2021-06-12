import {get_name,get_traits} from "./form_getters.js"
import {Trait} from "./trait.js"

export class Roadmap {
    static setItem(item, data) {
        let roadmaps = game.settings.get("foundryvtt-pf2e-monster-maker", "roadmaps");
        roadmaps[item] = data;
        game.settings.set("foundryvtt-pf2e-monster-maker", "roadmaps", roadmaps);
    }

    static getItems() {
        let roadmaps = game.settings.get("foundryvtt-pf2e-monster-maker", "roadmaps");
        let roadmap_array = [];
        for(let roadmap of Object.keys(roadmaps)) {
            roadmap_array.push(roadmap);
        }
        return roadmap_array;
    }

    static getItem(item) {
        let roadmaps = game.settings.get("foundryvtt-pf2e-monster-maker", "roadmaps");
        return roadmaps[item];
    }
}

export function handle_drop(event) {
    let data = JSON.parse(event.dataTransfer.getData("text/plain"))["data"];
    let item = data["name"];
    Trait.setItem(item, data);
    Trait.setItemInHTML(item);
}


export function save_road_map(form) {
    let road_map_dictionary = {};
    let selections = [];
    for(let entry of form.entries()) {
        if(!entry[0].includes("creature")) {
            selections.push(entry[0]+"_"+entry[1]);
        }
    }
    road_map_dictionary["Selections"] = selections;
    road_map_dictionary["Traits"] = get_traits();
    Roadmap.setItem(get_name(form), road_map_dictionary);
}

export function apply_road_map(roadmap) {
    Trait.removeItems();
    Trait.removeItemsInHTML();
    roadmap = Roadmap.getItem(roadmap);
    for(let id of roadmap["Selections"]) {
        document.getElementById(id).checked = true;
    }
    let traits = roadmap["Traits"];
    for(let data of Object.values(traits)) {
        let item = data["name"];
        Trait.setItem(item, data);
        Trait.setItemInHTML(item);
    }
}
