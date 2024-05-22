import { Component, ElementRef ,ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumpstartComponentsModule } from '@wk/components-angular15';
import { CpaService } from '../services/cpa.service';
import { FormFieldErrorInfo } from '@wk/components-angular15';
import { componentApi } from '@wk/components-angular15';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Practitioner } from '../Interfaces/Practitioner';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { last, tap } from 'rxjs';


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
  cpaFormGroup: FormGroup;

  @ViewChild('selectedIndependentId') selectedIndependentId!: ElementRef<HTMLInputElement>;

  constructor(private _cpaService: CpaService, formBuilder: FormBuilder) {

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
        // console.log(res);
        // this.practitioners = this.getfilteredItems(res, 'independent')
        this.practitioners = res;
        // this.getfilteredItems(res)
      }
    });

  }

  createCpa() {
    // console.log(this.cpaFormGroup.value);
  }

  
  
  getAllDependentPractitioner(){

    const selectIdValue = this.selectedIndependentId.nativeElement.value;

    if (selectIdValue.trim().length === 0) {
      return;
    }
    
    this._cpaService.getAllDependentPractitioner(Number(selectIdValue)).subscribe(res => {

      if (res) {
        this.dependentPractitioners = res;
        console.log(res)
      }

    });
  }

  createCpaAgreement() {
    console.log(this.cpaFormGroup.value);
    this._cpaService.createCPAAgreement(this.cpaFormGroup.value).subscribe(res => {

      console.log("create response")
      console.log(res);
    });
  }


  getfilteredItems(unfiltered: Practitioner[], type: string) {
    return unfiltered.filter(item =>
      item.type.toLowerCase() == type
    );
  }

}
