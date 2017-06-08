import {HealthRecord} from "../models/health_record.model";

export class HealthRecordService {
    healthRecord: HealthRecord = new HealthRecord(
        'WGKK',
        'Valentin',
        'Gensthaler'
    );

    getHealthRecord() {
        return this.healthRecord;
    }
}