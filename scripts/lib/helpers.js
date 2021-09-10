export function id_to_name(name) {
    let form_name = name;
    form_name = form_name.split("_");
    form_name = form_name.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    form_name = form_name.join(" ");
    return form_name
}