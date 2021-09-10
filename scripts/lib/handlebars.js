import {apply_road_map, delete_roadmap} from "./roadmap.js"
import {Trait} from "./trait.js"
import {id_to_name} from "./helpers.js"

function equals(string_1, string_2) {
    return (string_1 === string_2);
}


export function apply_handlebars() {
    Handlebars.registerHelper('equals', equals);
    Handlebars.registerHelper('id_to_name', id_to_name)
}

function set_collapsibles() {
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

function set_roadmaps_events() {
    $('#roadmaps label').mousedown(function(event) {
        let roadmap = $(this).attr('for');
        switch (event.which) {
            case 1:
                apply_road_map(roadmap);
                break;
            case 3:
                delete_roadmap(roadmap);
                $(this).remove();
                break;
        }
    })
}


export function apply_jquery() {
    set_collapsibles();
    set_roadmaps_events();
    Trait.removeItems();
}