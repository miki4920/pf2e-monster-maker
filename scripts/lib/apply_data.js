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
    }

    apply_name() {
        let name = this.form_data.creature_name;
        let regex = new RegExp("^[a-zA-Z0-9 ]*$");
        if(name.length > 0 && regex.test(name)) {
            this.actor.update({"name": this.form_data.creature_name})
            return true;
        }
        else if(name.length > 0) {
            ui.notifications.error(`The character name must consist of alphanumeric chacters only.`);
        }
    }

    apply_level() {
        let level = this.form_data.creature_level;
        if(isNaN(level)) {
            ui.notifications.error(`The character level must be a number.`);
        }
        else {
            level = parseInt(level);
            if(-1 <= level && level <= 24) {
                this.level = level;
                this.actor.update({"data.details.level.value": level});
                return true;
            }
            else {
                ui.notifications.error(`The character level must be between -1 and 24.`);
            }
        }

    }
}
