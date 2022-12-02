import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocationCardComponent } from './view-location-card.component';

describe('ViewLocationCardComponent', () => {
  let component: ViewLocationCardComponent;
  let fixture: ComponentFixture<ViewLocationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLocationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLocationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
