import {EventEmitter, Input, Output} from "@angular/core";
export class MainService {
    @Input() theme: EventEmitter<any> = new EventEmitter();
    pregnantTheme;

    getTheme() {
        return this.pregnantTheme;
    }

    changeTheme(changeTheme: any) {
        this.theme = changeTheme;
    }
}