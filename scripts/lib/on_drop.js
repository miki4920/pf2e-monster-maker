export function handle_drop(event) {
    let data = JSON.parse(event.dataTransfer.getData("text/plain"))["data"];
    localStorage.setItem("monster_maker."+data["name"], JSON.stringify(data));
    let paragraph = document.createElement("p");
    paragraph.innerText = data["name"];
    let button = document.createElement("button")
    button.innerHTML = "Delete";
    button.addEventListener ("click", function() {
        localStorage.removeItem("monster_maker."+data["name"]);
        paragraph.remove();
        button.remove();
    });
    let traits = document.getElementById("monster_maker_traits")
    let div = document.createElement("div")
    div.classList.add("traits")
    div.appendChild(paragraph)
    div.appendChild(button)
    traits.appendChild(div)
}
