import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSlideshowComponent } from './featured-slideshow.component';

describe('FeaturedSlideshowComponent', () => {
  let component: FeaturedSlideshowComponent;
  let fixture: ComponentFixture<FeaturedSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
