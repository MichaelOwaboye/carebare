import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumpstartComponentsModule } from '@wk/components-angular15';

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
}