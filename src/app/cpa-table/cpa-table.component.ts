import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumpstartComponentsModule } from '@wk/components-angular15';

@Component({
  selector: 'app-cpa-table',
  standalone: true,
  imports: [CommonModule, JumpstartComponentsModule],
  templateUrl: './cpa-table.component.html',
  styleUrl: './cpa-table.component.css'
})
export class CPATableComponent {

}
