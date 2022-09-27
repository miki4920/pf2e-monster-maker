import {actorFields, DefaultCreatureStatistics, Levels, Statistics, Skills, Options} from "./Keys";
import {statisticValues} from "./Values";
import {BaseActor} from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/documents.mjs";


export class MonsterMaker extends FormApplication {
    data = DefaultCreatureStatistics
    actor = <BaseActor>this.object
    level = "-1"
    // override activateListeners(): void {
    //     for(const category of this.data) {
    //         for(const statistic of category.statisticEntries) {
    //             let element = <HTMLInputElement>document.getElementById("monsterMaker" + statistic.name)
    //             if (element) {
    //                 element.value = category.defaultValue;
    //             }
    //         }
    //     }
    // }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["form"],
            popOut: true,
            template: `modules/foundryvtt-pf2e-monster-maker/dist/forms/monsterMakerForm.html`,
            id: "monsterMakerForm",
            title: "Monster Maker Form",
            height: 800,
            width: 400
        });
    }

    applyName(formData) {
        let name = formData[Statistics.name] ? formData[Statistics.name] : "Placeholder"
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
        const strikeDamage = statisticValues[Statistics.strikeDamage][this.level][strikeDamageOption]
        let strike = {
            name: 'Strike',
            type: 'melee',
            data: {
                damageRolls: [
                    {
                        damage: strikeDamage,
                    },
                ],
                bonus: {
                    value: strikeBonus,
                },
            },
        };
        return Item.create(strike, {parent: this.actor})
    }

    applySpellcasting(formData) {
        const spellcastingOption = formData[Statistics.spellcasting]
        const spellcastingBonus = parseInt(statisticValues[Statistics.spellcasting][this.level][spellcastingOption])
        const spellcasting = {
            name: "Spellcasting",
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
                const skill = {
                    name: skillName,
                    type: 'lore',
                    data: {
                        mod: {
                            value: value,
                        },
                    },
                };
                await Item.create(skill, {parent: this.actor})
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
        return {"CreatureStatistics": JSON.parse(JSON.stringify(this.data)), "Levels": Levels}
    }

}