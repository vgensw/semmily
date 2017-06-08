import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Settings} from "../shared/models/settings.model";
import {SettingsService} from "./settings.service";
import {PinService} from "../shared/services/pin.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'ms-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @ViewChild('pregnant') pregnantRef: ElementRef;
  @ViewChild('pregnantPin') pregnantPinRef: ElementRef;
  @ViewChild('pregnantDesign') pregnantDesignRef: ElementRef;

  public form: FormGroup;

  settings: Settings;

  pregnant;
  pregnantPin;
  pregnantDesign;

  constructor(private settingsService: SettingsService, private pinService: PinService, private fb: FormBuilder) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
    this.form = this.fb.group({
      pregnant: [false, Validators.compose([])],
      pregnantPin: [false, Validators.compose([])],
      pregnantDesign: [false, Validators.compose([])],
    });

    this.pregnantPin = this.settings.pregnantPin;
    this.pregnant = this.settings.pregnant;
    this.pregnantDesign = this.settings.pregnantDesign;

    console.log(this.pregnantPin);
  }

  saveSettings() {
    const updateSettings = this.form.value;
    console.log(updateSettings);
    this.settingsService.updateSettings(updateSettings);
    // this.pinService.addPregnancyPins();
  }

}
