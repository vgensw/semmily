import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fadeInAnimation} from "../core/route-animation/route.animation";
import {FormControl} from "@angular/forms";

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {MdDialog, MdDialogRef, MdSnackBar} from "@angular/material";
import {Experte} from "../shared/models/expert.model";
import {ExpertService} from "../shared/services/expert.service";
import {FamilyMember} from "../shared/models/family_member.model";
import {FamilyService} from "../shared/services/family.service";
import {Observable} from "rxjs/Observable";
import {Pin} from "../shared/models/pin.model";
import {PinService} from "../shared/services/pin.service";
import {HealthRecord} from "../shared/models/health_record.model";
import {HealthRecordService} from "../shared/services/health_record.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ms-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class BookComponent implements OnInit {

  elementCtrl: FormControl;
  femCtrl: FormControl;
  filteredElements: any;
  filteredFam: any;
  experts: Experte[] = [];
  selectedIndex: number = 0;

  formFName: string;
  formLName: string;
  formKK: string;

  healthRecordInput: HealthRecord;

  elements = [
    'Mutterkindpassberatung',
    'Ernährungsberatung'
  ];

  family: FamilyMember[];

  constructor(public dialog: MdDialog, private expertService: ExpertService, private familyService: FamilyService, private pinService: PinService, private healthRecordService: HealthRecordService, public snackBar: MdSnackBar, private router: Router
  ) {
    this.elementCtrl = new FormControl();
    this.filteredElements = this.elementCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterElements(name));

    this.femCtrl = new FormControl();
    this.filteredFam = this.femCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterFam(name));

  }

  filterElements(val: string) {
    return val ? this.elements.filter(s => new RegExp(`^${val}`, 'gi').test(s))
        : this.elements;
  }
  filterFam(val: string) {
    return val ? this.elements.filter(s => new RegExp(`^${val}`, 'gi').test(s))
        : this.family;
  }

  dialogRef: MdDialogRef<DialogInfoProfessional>;


  openDialog(expert: Experte) {
    this.dialogRef = this.dialog.open(DialogInfoProfessional, {
      disableClose: false
    });
    this.dialogRef.componentInstance.vname = expert.vorname;
    this.dialogRef.componentInstance.nname = expert.nachname;
    this.dialogRef.componentInstance.email = expert.email;
    this.dialogRef.componentInstance.beruf = expert.beruf;
    this.dialogRef.componentInstance.nummer = expert.telefon;
  }

  dialogRefPrevApp: MdDialogRef<DialogPrevAppointments>;

  openDialogPrevApp() {
    this.dialogRefPrevApp = this.dialog.open(DialogPrevAppointments, {
      disableClose: false
    });
  }

  ngOnInit() {
    this.family = this.familyService.getFamilyMember();
    this.experts = this.expertService.getExperts();
    this.healthRecordInput = this.healthRecordService.getHealthRecord();
  }

  onUpdate() {
    this.formFName = this.healthRecordInput.vname;
    this.formLName = this.healthRecordInput.nname;
    this.formKK = this.healthRecordInput.kk;
  }

  nextStep() {
    this.selectedIndex += 1;
  }

  previousStep() {
    this.selectedIndex -= 1;
  }

  sendBooking() {
    const newPin = new Pin('Buchungspin', 'Danke für Ihre Buchung', 'Lieber Valentin! Danke für Ihre Buchung bei Mission Nutrition!', '', 'https://mission-nutrition.at/wp-content/uploads/2014/11/IMG_3426.jpg', 'Mission Nutrition', '' );
    const rememberPin = new Pin('Erinnerungspin', 'Erinnerung für den morgigen Termin!', 'Lieber Valentin! Bitte vergiss nicht - morgen ist unser großer Termin! Vergiss ihn nicht!', '', 'https://mission-nutrition.at/wp-content/uploads/2014/11/IMG_3426.jpg', 'Mission Nutrition', '' );

    this.pinService.addPin(newPin);
    // this.pinService.addPin(rememberPin);

    this.snackBar.open('Die Buchung wurde erfolgreich durchgeführt!', 'x', {
      duration: 3000
    });

    this.router.navigateByUrl('/');


  }

}

@Component({
  selector: 'dialog-info-professional',
  templateUrl: 'dialog-info-professional-dialog.html',
})
export class DialogInfoProfessional {
  constructor(public dialogRef: MdDialogRef<DialogInfoProfessional>) {}
  vname: string;
  nname: string;
  email: string;
  beruf: string;
  nummer: string;
}

@Component({
  selector: 'dialog-prev-appointments',
  templateUrl: 'dialog-prev-appointments.html',
})
export class DialogPrevAppointments {

  pins: Pin[];

  constructor(public dialogRef: MdDialogRef<DialogPrevAppointments>, private pinService: PinService) {}

  getPins() {
    this.pins = this.pinService.getPins();
  }
}
