import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumpstartComponentsModule } from '@wk/components-angular15';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, JumpstartComponentsModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  constructor(private changeDetector: ChangeDetectorRef) {}

  logEvent(event: any) {
    console.log(event);
  }

  searchOnKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.logEvent('search on enter');
    }
  }
}
