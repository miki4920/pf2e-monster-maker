export class MonsterMaker extends FormApplication {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["form"],
            popOut: true,
            template: `modules/foundryvtt-pf2e-monster-maker/dist/forms/monsterMakerForm.html`,
            id: "monsterMakerForm",
            title: "Monster Maker Form",
            height: 255,
            width: 900
        });
    }

    // @ts-ignore
    protected _updateObject(event: Event, formData?: object): Promise<unknown> {
        console.log(1)
    }

}