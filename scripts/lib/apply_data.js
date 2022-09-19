import {data} from "./data/abilities.js"
import {get_name, get_level, get_fields, get_items} from "./form_getters.js"

export class ApplyData {
    constructor(actor, form_data) {
        this.actor = actor;
        this.form_data = form_data;
        this.level = -1;
    }

    async apply_data() {
        await this.apply_name();
        await this.apply_level();
        await this.apply_fields();
        await this.apply_attacks();
    }

    async apply_name() {
        let name = get_name(this.form_data);
        await this.actor.update({"name": name})
        await this.actor.update({"token.name": name})
    }

    async apply_level() {
        this.level = get_level(this.form_data)
        await this.actor.update({"data.details.level.value": this.level});
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
            name: 'Attack',
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
}
