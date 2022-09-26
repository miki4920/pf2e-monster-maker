import {actorFields, DefaultCreatureStatistics, Levels} from "./Keys";
import {statisticValues} from "./Values";
import Document from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/abstract/document.mjs";

export class MonsterMaker extends FormApplication {
    data = DefaultCreatureStatistics
    override activateListeners(): void {
        for(const category of this.data) {
            for(const statistic of category.statisticEntries) {
                let element = <HTMLInputElement>document.getElementById("monsterMaker" + statistic.name)
                if (element) {
                    element.value = category.defaultValue;
                }
            }
        }
    }

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

    // @ts-ignore
    protected async _updateObject(event: Event, formData?: object): Promise<unknown> {
        if(formData) {
            let updateData = {}
            let level = formData["Level"]
            for(const key of Object.keys(formData)) {
                if(actorFields[key]) {
                    let actorField = actorFields[key]
                    let option = formData[key]
                    updateData[actorField] = parseInt(statisticValues[key][level][option])
                }
            }
            await (<Document<any>>this.object).update(updateData);
        }
    }

    // @ts-ignore
    getData() {
        return {"CreatureStatistics": JSON.parse(JSON.stringify(this.data)), "Levels": Levels}
    }

}