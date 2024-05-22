import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumpstartComponentsModule } from '@wk/components-angular15';
import { Router } from '@angular/router';
import { CpaService } from '../services/cpa.service';
import { CPAAgreement } from '../Interfaces/Practitioner';

interface cpaData {
  dependantPractionerName: string;
  credentials: string;
}
@Component({
  selector: 'app-cpa-table',
  standalone: true,
  imports: [CommonModule, JumpstartComponentsModule],
  templateUrl: './cpa-table.component.html',
  styleUrl: './cpa-table.component.css'
})


export class CPATableComponent {

  agreements: CPAAgreement[] = [];


  constructor(
    private router: Router, private _cpaService: CpaService
  ) {}

  ngOnInit() {

    this._cpaService.getCPAAgreements().subscribe(res => {

      if (res) {
        this.agreements = res;
      }
    });   

  }

  cpaDummyData: cpaData[] = [
    {
    "dependantPractionerName": "Phillip Lawerence",
    "credentials": "PharD"
    },
    {
      "dependantPractionerName": "Henri Severin",
      "credentials": "Nurse Practioner"
    }, 
    {
      "dependantPractionerName": "Olga Severin",
      "credentials": "Physicians Assistant"
    }
  ];

  navigateToDocument(id: number): void {
    this.router.navigateByUrl('/cpa-document?id=' + id);

  }

  navigateToCreateCPA(): void {
    this.router.navigateByUrl('/create-cpa');
  }
}