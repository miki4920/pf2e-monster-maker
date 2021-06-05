import {get_name,get_traits} from "./form_getters.js"

export function save_road_map(form) {
    let road_maps_dictionary = JSON.parse(localStorage.getItem("roadmaps"));
    let road_map_dictionary = {};
    for(let entry of form.entries()) {
        if(!entry[0].includes("creature")) {
            road_map_dictionary[entry[0]] = entry[1];
        }
    }
    road_map_dictionary["Traits"] = get_traits();
    road_maps_dictionary[get_name(form)] = road_map_dictionary;
    console.log(road_map_dictionary)
    localStorage.setItem("roadmaps", JSON.stringify(road_maps_dictionary));
}