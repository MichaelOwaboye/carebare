import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumpstartComponentsModule } from '@wk/components-angular15';
import { CpaService } from '../services/cpa.service';
import { FormFieldErrorInfo } from '@wk/components-angular15';
import { componentApi } from '@wk/components-angular15';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Practitioner } from '../Interfaces/Practitioner';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { last } from 'rxjs';


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

    this._cpaService.getIndependentPractioner().subscribe(res => {

      if (res) {
        // console.log(res);
        // this.practitioners = this.getfilteredItems(res, 'independent')
        this.practitioners = res;
        // this.getfilteredItems(res)
      }

    });

  }

  createCpa() {
    console.log(this.cpaFormGroup.value);
  }


  getfilteredItems(unfiltered: Practitioner[], type: string) {
    return unfiltered.filter(item =>
      item.type.toLowerCase() == type
    );
  }

}
