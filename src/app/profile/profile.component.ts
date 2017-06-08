import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FamilyService} from "../shared/services/family.service";
import {FamilyMember} from "../shared/models/family_member.model";
import {MdDialog, MdDialogRef} from "@angular/material";

@Component({
  selector: 'ms-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  familyMembers: FamilyMember[];

  constructor(public dialog: MdDialog, private familyService: FamilyService) { }

  dialogRef: MdDialogRef<DialogAddMember>;


  openDialog() {
    this.dialogRef = this.dialog.open(DialogAddMember, {
      disableClose: false
    });
  }

  ngOnInit() {
    this.familyMembers = this.familyService.getFamilyMember();
    this.familyService.familyMemberChanged.subscribe(
        (family_members: FamilyMember[]) => {
          this.familyMembers = family_members;
        }
    );
  }

}

@Component({
  selector: 'dialog-add-member',
  templateUrl: 'dialog-add-member.html',
})
export class DialogAddMember implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('roleInput') roleInputRef: ElementRef;


  constructor(public dialogRef: MdDialogRef<DialogAddMember>, private familyService: FamilyService) {}

  ngOnInit() {

  }

  sendMember() {
    const newMember = new FamilyMember( this.nameInputRef.nativeElement.value, this.roleInputRef.nativeElement.value );
    this.familyService.addFamilyMember(newMember);
  }
}

