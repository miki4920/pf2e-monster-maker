import {abilities} from "./data/abilities.js"

export class ApplyData {
    constructor(actor, form_data) {
        this.actor = actor;
        this.data = actor.data;
        this.form_data = form_data;
        this.level;
    }

    apply_data() {
        let name = this.apply_name();
        if(!name) {
            return
        }
        let level = this.apply_level();
        if(!level) {
            return
        }
        this.apply_abilities();

    }

    apply_name() {
        let name = this.form_data.get("creature_name");
        let regex = new RegExp("^[a-zA-Z0-9 ]*$");
        if(name.length > 0 && regex.test(name)) {
            this.actor.update({"name": name})
            return true;
        }
        else if(name.length > 0) {
            ui.notifications.error(`The character name must consist of alphanumeric chacters only.`);
        }
    }

    apply_level() {
        let level = this.form_data.get("creature_level");
        if(isNaN(level)) {
            ui.notifications.error(`The character level must be a number.`);
        }
        else {
            level = parseInt(level);
            if(-1 <= level && level <= 24) {
                this.level = this.form_data.get("creature_level");
                this.actor.update({"data.details.level.value": this.form_data.get("creature_level")});
                return true;
            }
            else {
                ui.notifications.error(`The character level must be between -1 and 24.`);
            }
        }
    }

    apply_abilities() {
        let ability_names = Object.keys(abilities["abilities"]);
        this.actor.update({"data.abilities.str.mod": "100"});
        for(var ability of ability_names) {
            let dict = {}
            let path = abilities["abilities"][ability]
            dict[path] = abilities["scores"][this.level][this.form_data.get(ability)]
            this.actor.update(dict);
        }
    }
}
