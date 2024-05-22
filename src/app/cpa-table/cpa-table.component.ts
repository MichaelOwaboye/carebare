import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumpstartComponentsModule } from '@wk/components-angular15';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) {}

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

  navigateToDocument(): void {
    this.router.navigateByUrl('/cpa-document');
  }
}