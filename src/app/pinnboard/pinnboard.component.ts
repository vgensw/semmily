import {Component, Inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MD_DIALOG_DATA, MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import {fadeInAnimation} from "../core/route-animation/route.animation";
import {PinService} from "../shared/services/pin.service";
import {Pin} from "../shared/models/pin.model";
import {SettingsService} from "../settings/settings.service";
import {Settings} from "../shared/models/settings.model";


@Component({
  selector: 'ms-pinnboard',
  templateUrl: './pinnboard.component.html',
  styleUrls: ['./pinnboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class PinnboardComponent implements OnInit {
  pins: Pin[];
  isPregnant: boolean = false;
  pregnantPins: Pin[];
  settings: Settings;

  constructor(public dialog: MdDialog, private pinService: PinService, private settingsService: SettingsService) { }

  ngOnInit() {
    this.pins = this.pinService.getPins();
    this.pregnantPins = this.pinService.getPregnantPins();

    this.isPregnant = this.settingsService.isPregnant();

    this.settings = this.settingsService.getSettings();
  }

  onDelete(index: number) {
    console.log(index);
    this.pinService.onDelete(index);
    this.pins.splice(index, 1);
  }

  dialogRef: MdDialogRef<dialogChecklist>;

  openDialog(title, description, img, video, expert) {
    this.dialogRef = this.dialog.open(dialogChecklist, {
      disableClose: false,
    });
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.description = description;
    this.dialogRef.componentInstance.imgPath = img;
    this.dialogRef.componentInstance.videoPath = video;
    this.dialogRef.componentInstance.expert = expert;
  }

}

@Component({
  selector: 'ms-dialog-checklist',
  templateUrl: 'pinnboard_dialog_checklist.html'
})
export class dialogChecklist implements OnInit{
  constructor(public dialogRef: MdDialogRef<dialogChecklist>) {
  }
  title: string;
  description: string;
  imgPath: string;
  videoPath: string;
  expert: string;

  ngOnInit() {
  }

}


