import {get_name,get_traits} from "./form_getters.js"

export function save_road_map(form) {
    let road_maps_dictionary = JSON.parse(localStorage.getItem("roadmaps"));
    let road_map_dictionary = {};
    let selections = [];
    for(let entry of form.entries()) {
        if(!entry[0].includes("creature")) {
            selections.push(entry[0]+"_"+entry[1]);
        }
    }
    road_map_dictionary["Selections"] = selections;
    road_map_dictionary["Traits"] = get_traits();
    road_maps_dictionary[get_name(form)] = road_map_dictionary;
    localStorage.setItem("roadmaps", JSON.stringify(road_maps_dictionary));
}

export function remove_traits() {
    let traits = Object.keys(localStorage);
    for(let trait of traits) {
        if(trait.includes("monster_maker")) {
            localStorage.removeItem(trait);
        }
    }
    let window_traits = document.getElementById("monster_maker_traits")
    window_traits.innerHTML = "";
}

export function apply_road_map(roadmap) {
    let road_maps_dictionary = JSON.parse(localStorage.getItem("roadmaps"));
    let road_map = road_maps_dictionary[roadmap];
    for(let id of road_map["Selections"]) {
        document.getElementById(id).checked = true;
    }
    remove_traits();
    let traits = road_map["Traits"];
    for(let trait of Object.values(traits)) {
        localStorage.setItem("monster_maker."+trait["name"], JSON.stringify(trait));
        let paragraph = document.createElement("p");
        paragraph.innerText = trait["name"];
        paragraph.addEventListener("click", function() {
            localStorage.removeItem("monster_maker."+trait["name"]);
            paragraph.remove();
        });
        window_traits.appendChild(paragraph)
    }
}