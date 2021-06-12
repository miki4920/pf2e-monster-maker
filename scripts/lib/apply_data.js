import {data} from "./data/abilities.js"
import {get_name, get_level, get_fields, get_items, get_traits} from "./form_getters.js"

export class ApplyData {
    constructor(actor, form_data) {
        this.actor = actor;
        this.form_data = form_data;
        this.level;
    }

    async apply_data() {
        await this.apply_name();
        await this.apply_level();
        await this.apply_fields();
        await this.apply_attacks();
        await this.apply_skills();
        await this.apply_traits();
    }

    async apply_name() {
        let name = get_name(this.form_data);
        if (name) {
            await this.actor.update({"name": name})
            return;
        }
        ui.notifications.error(`The name is incorrect.`);
    }

    async apply_level() {
        let level = get_level(this.form_data)
        if (level) {
            this.level = level
            await this.actor.update({"data.details.level.value": level});
            return;
        }
        ui.notifications.error(`The character level must be a number between -1 and 24.`);
    }

    async apply_fields() {
        let fields = get_fields(this.form_data);
        let dictionary = {};
        for (let key of Object.keys(fields)) {
            let paths = data["values"]["fields"][key][0];
            for (let path of paths.split(",")) {
                let table = data[data["values"]["fields"][key][1]];
                dictionary[path] = parseInt(table[this.level][fields[key]]);
            }
        }
        await this.actor.update(dictionary);
    }

    async apply_attacks() {
        let attacks = get_items(this.form_data)
        let strike_damage = data[data["values"]["items"]["Strike Damage"]][this.level][attacks["Strike Damage"]];
        let strike_attack_bonus = parseInt(data[data["values"]["items"]["Strike Attack Bonus"]][this.level][attacks["Strike Attack Bonus"]]);
        let attack = {
            name: 'New Attack',
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
       await Item.create(attack, {parent: this.actor});
    }

    async apply_skills() {
        let skills = get_items(this.form_data);
        for (let skill of Object.keys(skills)) {
            if (!skill.includes("Strike")) {
                let skill_value = parseInt(data[data["values"]["items"][skill]][this.level][skills[skill]])
                if (skill_value) {
                    let skill_data = {
                        name: skill,
                        type: 'lore',
                        data: {
                            mod: {
                                value: skill_value,
                            },
                        },
                    };
                    await Item.create(skill_data, {parent: this.actor});
                }
            }
        }
    }

    async apply_traits() {
        let traits = get_traits()
        for (let trait of Object.values(traits)) {
            await Item.create(trait, {parent: this.actor});
        }
    }
}
