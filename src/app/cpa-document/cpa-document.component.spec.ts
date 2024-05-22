import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPADocumentComponent } from './cpa-document.component';

describe('CPADocumentComponent', () => {
  let component: CPADocumentComponent;
  let fixture: ComponentFixture<CPADocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CPADocumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CPADocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
