import {apply_road_map} from "./roadmap.js"

function equals(string_1, string_2) {
    return (string_1 === string_2);
}

function upper_case(string) {
    return string.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

function underscore(string) {
    return string.replace(" ", "_");
}

export function set_collapsibles() {
    let coll = document.getElementsByClassName("collapsible");
    let i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

export function set_apply_button(roadmaps) {
    for(let roadmap of roadmaps) {
        $("#"+underscore(roadmap)).click(function() {apply_road_map(roadmap)});
    }
}

export function apply_handlebars() {
    Handlebars.registerHelper('equals', equals);
    Handlebars.registerHelper('upper_case', upper_case)
    Handlebars.registerHelper('underscore', underscore)
}