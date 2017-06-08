import {Settings} from "../shared/models/settings.model";
import {PinService} from "../shared/services/pin.service";
import {Injectable} from "@angular/core";
import {MainService} from "../shared/services/main.service";
import {retry} from "rxjs/operator/retry";

@Injectable()
export class SettingsService {

    settings: Settings = new Settings(false, true, false, 330);

    constructor(private pinService: PinService, private mainService: MainService) {}

    getSettings() {
        return this.settings;
    }

    updateSettings(updateSettings: Settings) {
        const updatedSettings = updateSettings;
        console.log(updatedSettings);
        this.settings.pregnant = updateSettings.pregnant;
        this.settings.pregnantPin = updateSettings.pregnantPin;
        this.settings.pregnantDesign = updateSettings.pregnantDesign;

        console.log(this.settings);

        if (this.settings.pregnantPin === true) {
            this.pinService.addPregnancyPins();
        }

        if (this.settings.pregnantDesign === true) {
            this.mainService.changeTheme(this.settings.pregnantDesign);
            console.log("Bitte hab kurz Geduld, die Plattform wird für dich grafisch angepasst...");
        }
    }

    updateColors() {
        return this.settings.pregnantDesign;
    }

    isPregnant() {
        return this.settings.pregnant;
    }
}