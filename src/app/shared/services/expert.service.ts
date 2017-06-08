import {Experte} from "../models/expert.model";
export class ExpertService {

    experten: Experte[] = [
        new Experte(
            'Lisa',
            'Gensthaler',
            'Chefarzt',
            '06641640799',
            'lgensthaler@me.com',
            'Neulinggasse',
            '7',
            '1030',
        ),
        new Experte(
            'Mariella',
            'Schmid',
            'Ernährungsberater',
            '06641640799',
            'lgensthaler@me.com',
            'Neulinggasse',
            '7',
            '1030',
        ),
    ];

    constructor() {}

    getExperts() {
        return this.experten;
    }

}