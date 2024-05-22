import { Component } from '@angular/core';
import { JumpstartComponentsModule } from '@wk/components-angular15';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cpa-document',
  standalone: true,
  imports: [JumpstartComponentsModule, RouterModule],
  templateUrl: './cpa-document.component.html',
  styleUrl: './cpa-document.component.css'
})
export class CPADocumentComponent {

}
