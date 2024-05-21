import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPATableComponent } from './cpa-table.component';

describe('CPATableComponent', () => {
  let component: CPATableComponent;
  let fixture: ComponentFixture<CPATableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CPATableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CPATableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
