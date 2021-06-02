import {data} from "./data/abilities.js"

export class ApplyData {
    constructor(actor, form_data) {
        this.actor = actor;
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
        this.apply_values();
        this.apply_hp();
        this.apply_strikes();
        this.apply_skills();
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

    apply_values() {
        let keys = Object.keys(data["values"]);
        for(let key of keys) {
            this.apply_value(key);
        }
    }

    apply_value(key) {
        let dictionary = {};
        if (data["values"][key][0]) {
            let path = data["values"][key][0];
            let table = data[data["values"][key][1]];
            dictionary[path] = table[this.level][this.form_data.get(key)];
        }
        this.actor.update(dictionary);
    }

    apply_hp() {
        let hp_table = data["hit_points"][this.level];
        let hp = this.form_data.get("Hit Points");
        hp = parseInt(hp_table[hp]);
        let dictionary = {};
        dictionary["data.attributes.hp.value"] = hp;
        dictionary["data.attributes.hp.max"] = hp;
        this.actor.update(dictionary);
    }

    apply_strikes() {
        let strike_attack_bonus = data["strike_attack_bonus"][this.level];
        strike_attack_bonus = parseInt(strike_attack_bonus[this.form_data.get("Strike Attack Bonus")]);
        let strike_damage = data["strike_damage"][this.level];
        strike_damage = strike_damage[this.form_data.get("Strike Damage")];
        console.log(strike_damage)
        let strike = {
            name: 'New Strike',
            type: 'melee',
            data: {
                damageRolls: [
                    {
                        damage: strike_damage,
                    },
                ],
                bonus: {
                    value: strike_attack_bonus,
                },
            },
        };
        this.actor.createOwnedItem(strike);
    }

    apply_skills() {
        let skills = data["keys"]["Skills"];
        for(let skill_name of skills) {
            skill_name = skill_name["name"];
            let skill_value = data["skills"][this.level][this.form_data.get(skill_name)];
            if(skill_value) {
                let skill_data = {
                    name: skill_name,
                    type: 'lore',
                    data: {
                        mod: {
                            value: skill_value,
                        },
                    },
                };
                this.actor.createOwnedItem(skill_data);
            }
        }
    }
}
