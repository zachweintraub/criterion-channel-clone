import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespitchNavComponent } from './salespitch-nav.component';

describe('SalespitchNavComponent', () => {
  let component: SalespitchNavComponent;
  let fixture: ComponentFixture<SalespitchNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalespitchNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespitchNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
