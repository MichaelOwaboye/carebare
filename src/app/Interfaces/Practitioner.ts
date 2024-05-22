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
    dependentPractitioner:     DependentPractitioner;
    independentPractitioner:   DependentPractitioner;
    jurisdiction:              string;
    patients:                  string;
    medicalConditions:         string;
    protocol:                  string;
    services:                  string;
    oversightFrequency:        string;
    effectiveDate:             string;
    expiryDate:                string;
    createdDate:               string;
    modifiedDate:              string;
}

export interface DependentPractitioner {
    id:           number;
    type:         Type;
    firstName:    string;
    lastName:     string;
    email:        string;
    phoneNumber:  string;
    credential:   string;
    workAddress:  string;
    city:         string;
    zipCode:      string;
    state:        string;
    createdDate:  null;
    modifiedDate: null;
}

export enum Type {
    Dependent = "Dependent",
    Independent = "Independent",
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
