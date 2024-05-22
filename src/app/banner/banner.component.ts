import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumpstartComponentsModule } from '@wk/components-angular15';
import { RouterModule } from '@angular/router';
import { style } from '@angular/animations';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, JumpstartComponentsModule, RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      const productNameElement = document.querySelector('.cg-banner-brand-parent') as HTMLElement;
      productNameElement.style.color = '#425E10';
    }, 0);
  }

  logEvent(event: any) {
    console.log(event);
  }

  searchOnKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.logEvent('search on enter');
    }
  }
}
