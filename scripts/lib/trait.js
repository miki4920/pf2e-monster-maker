export class Trait {
    static getItems() {
        let traits = game.settings.get("foundryvtt-pf2e-monster-maker", "traits");
        let trait_array = [];
        for(let trait of Object.keys(traits)) {
            trait_array.push(trait);
        }
        return trait_array;
    }

    static getItem(item) {
        let traits = game.settings.get("foundryvtt-pf2e-monster-maker", "traits");
        return traits[item];
    }

    static setItem(item, data) {
        let traits = game.settings.get("foundryvtt-pf2e-monster-maker", "traits");
        traits[item] = data;
        game.settings.set("foundryvtt-pf2e-monster-maker", "traits", traits);
    }

    static setItemInHTML(item) {
        let traits = document.getElementById("monster_maker_traits")
        let paragraph = document.createElement("p");
        paragraph.innerText = item;
        paragraph.addEventListener("click", function() {
            Trait.removeItem(item)
            paragraph.remove();
        });
        traits.appendChild(paragraph);
    }

    static removeItems() {
        game.settings.set("foundryvtt-pf2e-monster-maker", "traits", {});
    }

    static removeItemsInHTML() {
        let traits = document.getElementById("monster_maker_traits")
        traits.innerHTML = "";
    }

    static removeItem(item) {
        let traits = game.settings.get("foundryvtt-pf2e-monster-maker", "traits");
        delete traits[item]
        game.settings.set("foundryvtt-pf2e-monster-maker", "traits", traits);
    }
}