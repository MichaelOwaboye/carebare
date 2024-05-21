import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JumpstartComponentsModule } from '@wk/components-angular15';
import { BannerComponent } from './banner/banner.component';
import { CPATableComponent } from './cpa-table/cpa-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JumpstartComponentsModule, BannerComponent, CPATableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'care-pass';
}
