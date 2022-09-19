import {data} from "./data/abilities.js"

export function get_name(form) {
    let name = form.get("creature_name");
    let regex = new RegExp("^[a-zA-Z0-9 ]*$");
    if(name.length > 0 && regex.test(name)) {
        return name;
    }
    else {
        return false;
    }
}

export function get_level(form) {
    let level = form.get("creature_level");
    if(!isNaN(level)) {
        level = parseInt(level);
        if (-1 <= level && level <= 24) {
            return level.toString();
        }
    }
    return false;
}

export function get_fields(form) {
    let fields_dictionary = {}
    let fields = data["values"]["fields"]
    for(let field of Object.keys(fields)) {
        fields_dictionary[field] = form.get(field);
    }
    return fields_dictionary;
}

export function get_items(form) {
    let items_dictionary = {}
    let items = data["values"]["items"]
    for(let item of Object.keys(items)) {
        items_dictionary[item] = form.get(item);
    }
    return items_dictionary;
}