import {DefaultCreatureStatistics, Levels} from "./Data";

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
    protected _updateObject(event: Event, formData?: object): Promise<unknown> {
        console.log(formData)
    }

    // @ts-ignore
    getData() {
        return {"CreatureStatistics": JSON.parse(JSON.stringify(this.data)), "Levels": Levels}
    }

}