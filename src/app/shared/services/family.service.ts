import {FamilyMember} from "../models/family_member.model";
import {EventEmitter} from "@angular/core";
export class FamilyService {

    familyMemberChanged = new EventEmitter<FamilyMember[]>();

    private familyMember: FamilyMember[] = [
        new FamilyMember(
            'Alfred',
            'Vater'
        ),
        new FamilyMember(
            'Heriberta',
            'Mama'
        ),
        new FamilyMember(
            'Laurenzius',
            'Bruder'
        )
    ];

    constructor() {

    }

    getFamilyMember() {
        return this.familyMember.slice();
    }

    addFamilyMember(familyMember: FamilyMember) {
        this.familyMember.push(familyMember);
        this.familyMemberChanged.emit(this.familyMember.slice());
    }

}