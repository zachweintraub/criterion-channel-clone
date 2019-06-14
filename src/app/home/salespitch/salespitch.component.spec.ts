import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespitchComponent } from './salespitch.component';

describe('SalespitchComponent', () => {
  let component: SalespitchComponent;
  let fixture: ComponentFixture<SalespitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalespitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
