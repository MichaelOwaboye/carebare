export interface Practitioner {
    id:          number;
    firstName:   string;
    lastName:    string;
    email:       string;
    phoneNumber: string;
    credential:  string;
    workAddress: string;
    city:        string;
    zipCode:     string;
    state:       string;
    type:        string;
}

export interface CPAAgreement {
    id:                        number;
    dependentPractitionerId:   number;
    independentPractitionerId: number;
    jurisdiction:              string;
    patients:                  string;
    medicalConditions:         string;
    protocol:                  string;
    services:                  string;
    oversightFrequency:        string;
    effectiveDate:             Date;
    expiryDate:                Date;
    createdDate:               Date;
    modifiedDate:              Date;
}

export interface ConstantResponse {
    practitionerTypes:                PatientType[];
    states:                           State[];
    patientTypes:                     PatientType[];
    medicalConditions:                MedicalCondition[];
    protocols:                        MedicalCondition[];
    services:                         MedicalCondition[];
    oversightFrequencies:             Frequence[];
    practitionerEducationCredentials: MedicalCondition[];
}

export interface Frequence {
    id:    number;
    value: string;
}

export interface MedicalCondition {
    id:    number;
    value: string;
}

export interface PatientType {
    id:   number;
    type: string;
}

export interface State {
    id:           number;
    name:         string;
    abbreviation: string;
}
