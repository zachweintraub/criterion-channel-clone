import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespitchDisplayComponent } from './salespitch-display.component';

describe('SalespitchDisplayComponent', () => {
  let component: SalespitchDisplayComponent;
  let fixture: ComponentFixture<SalespitchDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalespitchDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespitchDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
