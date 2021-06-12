export function handle_drop(event) {
    let data = JSON.parse(event.dataTransfer.getData("text/plain"))["data"];
    localStorage.setItem("monster_maker."+data["name"], JSON.stringify(data));
    let traits = document.getElementById("monster_maker_traits")
    let paragraph = document.createElement("p");
    paragraph.innerText = data["name"];
    paragraph.addEventListener("click", function() {
        localStorage.removeItem("monster_maker."+data["name"]);
        paragraph.remove();
    });
    traits.appendChild(paragraph)
}
