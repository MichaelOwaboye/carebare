import { Component, ElementRef ,ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumpstartComponentsModule } from '@wk/components-angular15';
import { CpaService } from '../services/cpa.service';
import { HttpClientModule } from '@angular/common/http';
import { MedicalCondition, PatientType, Practitioner } from '../Interfaces/Practitioner';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-cpa',
  standalone: true,
  imports: [CommonModule, JumpstartComponentsModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-cpa.component.html',
  styleUrl: './create-cpa.component.css'
})
export class CreateCpaComponent {

  practitioners: Practitioner[] = [];
  dependentPractitioners: Practitioner[] = [];
  patientTypes: PatientType[] = [];
  medicalConditionConst: MedicalCondition[] = [];
  servicesConst: MedicalCondition[] = [];
  protocols: MedicalCondition[] = [];
  cpaFormGroup: FormGroup;

  @ViewChild('selectedIndependentId') selectedIndependentId!: ElementRef<HTMLInputElement>;

  constructor(private _cpaService: CpaService, formBuilder: FormBuilder, private router: Router) {

    // this.cpaFormGroup = formBuilder.group({
    //   firstName: ['', [Validators.required, Validators.minLength(2)]],
    //   lastName: ['', [Validators.required, Validators.minLength(2)]],
    //   email: ['', [Validators.required]],
    //   phoneNumber: [],
    //   credential: ['',],
    //   workAddress: ['',],
    //   city: ['',],
    //   zipCode: ['',],
    //   state: ['',]
    // });

    
    this.cpaFormGroup = formBuilder.group({
      independentPractitionerId: ['', [Validators.required, Validators.minLength(2)]],
      dependentPractitionerId: ['', [Validators.required, Validators.minLength(2)]],
      oversightFrequency: ['', [Validators.required]],
      medicalConditions: ['',],     
      dPractitionerTitle: ['',],     
      services: ['',],    
      patients: ['',],     
      protocol: ['',],     
      state: ['',],     
    });

  }

  ngOnInit() {

    this._cpaService.getIndependentPractitioner().subscribe(res => {

      if (res) {
        this.practitioners = res;
      }
    });

    this._cpaService.getConstants().subscribe(res => {

      if (res) {
        
        this.patientTypes = res.patientTypes;
        this.medicalConditionConst = res.medicalConditions;
        this.protocols = res.protocols;
        this.servicesConst = res.services
        
      }
    });

  }

  createCpa() {
    // console.log(this.cpaFormGroup.value);
  }

  
  clearForm() {
    this.cpaFormGroup.reset();
  }

  getAllDependentPractitioner(){

    const selectIdValue = this.selectedIndependentId.nativeElement.value;

    if (selectIdValue.trim().length === 0) {
      return;
    }
    
    this._cpaService.getAllDependentPractitioner(Number(selectIdValue)).subscribe(res => {

      if (res) {
        this.dependentPractitioners = res;
        
      }

    });
  }

  createCpaAgreement() {
    console.log(this.cpaFormGroup.value);
    this._cpaService.createCPAAgreement(this.cpaFormGroup.value).subscribe(res => {

      this.clearForm();
    });
  }


  getfilteredItems(unfiltered: Practitioner[], type: string) {
    return unfiltered.filter(item =>
      item.type.toLowerCase() == type
    );
  }

}
