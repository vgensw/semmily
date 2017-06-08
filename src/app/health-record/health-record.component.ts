import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fadeInAnimation} from "../core/route-animation/route.animation";
import {PageTitleService} from "../core/page-title/page-title.service";
import {Experte} from "../shared/models/expert.model";
import {ExpertService} from "../shared/services/expert.service";
import {DialogInfoProfessional} from "../book/book.component";
import {MdDialog, MdDialogRef} from "@angular/material";
import {HealthRecord} from "../shared/models/health_record.model";
import {HealthRecordService} from "../shared/services/health_record.service";

@Component({
  selector: 'ms-health-record',
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class HealthRecordComponent implements OnInit {
  experts: Experte[] = [];
  healthRecordInput: HealthRecord;

  constructor(public dialog: MdDialog, private pageTitleService: PageTitleService, private expertService: ExpertService, private healthRecordService: HealthRecordService) { }

  ngOnInit() {
    this.pageTitleService.setTitle("Deine Gesundheitsdaten");
    this.experts = this.expertService.getExperts();
    this.healthRecordInput = this.healthRecordService.getHealthRecord();
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

}
