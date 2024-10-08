import {actorFields, DefaultCreatureStatistics, Levels, Statistics, Skills, Options, RoadMaps} from "./Keys";
import {statisticValues} from "./Values";
import {BaseActor} from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/documents.mjs";


export class MonsterMaker extends FormApplication {
    data = DefaultCreatureStatistics
    actor = <BaseActor>this.object
    level = "-1"

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["form"],
            popOut: true,
            template: `modules/pf2e-monster-maker/dist/forms/monsterMakerForm.html`,
            id: "monsterMakerForm",
            title: "Monster Maker Form",
            height: 833,
            width: 400
        });
    }

    applyName(formData) {
        let name = formData[Statistics.name] ? formData[Statistics.name] : this.actor.name
        return {"name": name}
    }

    applyLevel() {
        return {"system.details.level.value": parseInt(this.level)}
    }

    applyHitPoints(formData) {
        let option = formData[Statistics.hp]
        let hitPoints = parseInt(statisticValues[Statistics.hp][this.level][option])
        return {"system.attributes.hp.value": hitPoints}
    }

    applyStrike(formData) {
        const strikeBonusOption = formData[Statistics.strikeBonus]
        const strikeDamageOption = formData[Statistics.strikeDamage]
        const strikeBonus = parseInt(statisticValues[Statistics.strikeBonus][this.level][strikeBonusOption])
        let strikeDamage = statisticValues[Statistics.strikeDamage][this.level][strikeDamageOption]
        let strikeDamageID = randomID();
        let strike = {
            name: game["i18n"].localize("PF2EMONSTERMAKER.strike"),
            type: 'melee',
            system: {
                damageRolls: {
                    strikeDamageID: {
                        damage: strikeDamage,
                        damageType: 'bludgeoning',
                        category: null
                    },
                },
                bonus: {
                    value: strikeBonus,
                },
            },
        };
        return Item.create(strike, {parent: this.actor})
    }

    applySpellcasting(formData) {
        const spellcastingOption = formData[Statistics.spellcasting]
        if (spellcastingOption === Options.none) {
            return;
        }
        const spellcastingBonus = parseInt(statisticValues[Statistics.spellcasting][this.level][spellcastingOption])
        const spellcasting = {
            name: game["i18n"].localize("PF2EMONSTERMAKER.spellcasting"),
            type: "spellcastingEntry",
            system: {
                spelldc: {
                    value: spellcastingBonus,
                    dc: spellcastingBonus+8,
                },
                tradition: {
                    value: 'arcane',
                },
                prepared: {
                    value: 'innate',
                },
                showUnpreparedSpells: { value: true },
            }
        };
        return Item.create(spellcasting, {parent: this.actor})
    }

    async applySkills(formData) {
        for(const skillName of Skills) {
            const option = formData[skillName]
            if (option !== Options.none) {
                const value = parseInt(statisticValues[skillName][this.level][option])
                const skill = 'system.skills.' + skillName.split('.')[1].toLowerCase();
                await this.actor.update(foundry.utils.flattenObject({[skill]: {base: value}}));
            }
        }
    }

    protected async _updateObject(event: Event, formData?: object) {
        if(formData) {
            let updateData = {}
            this.level = formData[Statistics.level]
            for(const key of Object.keys(formData)) {
                if(actorFields[key]) {
                    let actorField = actorFields[key]
                    let option = formData[key]
                    updateData[actorField] = parseInt(statisticValues[key][this.level][option])
                }
            }
            Object.assign(updateData, this.applyName(formData))
            Object.assign(updateData, this.applyLevel())
            await this.actor.update(updateData);
            await this.actor.update(this.applyHitPoints(formData))
            await this.applyStrike(formData)
            await this.applySpellcasting(formData)
            await this.applySkills(formData)
        }
    }

    // @ts-ignore
    getData() {
        Handlebars.registerHelper('json', function(context) {
            return JSON.stringify(context);
        });
        return {"CreatureStatistics": JSON.parse(JSON.stringify(this.data)), "Levels": Levels, "RoadMaps": RoadMaps, "name": this.actor.name}
    }

}