import { Component } from '@angular/core';
import { JumpstartComponentsModule } from '@wk/components-angular15';
import { CpaService } from '../services/cpa.service';
import { HttpClientModule } from '@angular/common/http';
import { CPAAgreement, MedicalCondition, PatientType, Practitioner } from '../Interfaces/Practitioner';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cpa-document',
  standalone: true,
  imports: [JumpstartComponentsModule],
  templateUrl: './cpa-document.component.html',
  styleUrl: './cpa-document.component.css'
})
export class CPADocumentComponent {

  agreements: CPAAgreement[] = [];
  agreement!: CPAAgreement;

  independentCompleteName: string = '';
  independentCredential: string = '';
  dependentCompleteName: string = '';
  dependentCredential: string = '';
  cpaId: string = '';
  cpaPatients: string = '';
  medicalConditions: string = '';
  protocol: string = '';
  jurisdiction: string = '';
  services: string = '';
  frequecy: string = '';
  effectiveDate: string = '';
  creationDate: string = '';
  spacing: string = ' ';

  constructor(private _cpaService: CpaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const practitionerId = this.activatedRoute.snapshot.queryParamMap.get('id');

    // console.log("dd" + practitionerId);


    this._cpaService.getCPAAgreements().subscribe(res => {

      if (res) {

        this.agreements = res.filter(c => c.dependentPractitionerId == Number(practitionerId));
        this.agreement = this.agreements[0];
        this.cpaId = this.agreement.id.toString();
        this.medicalConditions = this.agreement.medicalConditions;
        this.frequecy = this.agreement.oversightFrequency;
        this.protocol = this.agreement.protocol;
        this.jurisdiction = this.agreement.jurisdiction;
        this.services = this.agreement.services;
        this.independentCompleteName = this.agreement.independentPractitioner.firstName + this.spacing + this.agreement.independentPractitioner.lastName;
        this.independentCredential = this.agreement.independentPractitioner.credential;
        this.dependentCompleteName = this.agreement.dependentPractitioner.firstName + this.spacing + this.agreement.dependentPractitioner.lastName;
        this.dependentCredential = this.agreement.dependentPractitioner.credential;
        
        console.log('this level' + this.agreement.createdDate)
        this.getEffectiveDate(this.agreement.createdDate);
        this.creationDate = this.agreement.createdDate.toString();

        // console.log(this.agreement); 
        // this.practitioners = res;
      }
    });

  }

  private getEffectiveDate(creationDate: string) {

    var dbCreationdate = new Date(creationDate);
    console.log('db' + dbCreationdate)
    var year = dbCreationdate.getFullYear();
    var month = dbCreationdate.getMonth();
    var day = dbCreationdate.getDate();

    let dStr: string = "2024-02-27";
    let res: Date = new Date(creationDate);
  
    console.log('res' + res)
    console.log('creationDate' + creationDate)

    var expires = new Date(year + 1, month, day);


    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    };

    this.effectiveDate = res.toLocaleString('en-US', options);

    console.log('from res' + this.effectiveDate)

  }

}
