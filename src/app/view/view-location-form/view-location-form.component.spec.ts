import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocationFormComponent } from './view-location-form.component';

describe('ViewLocationFormComponent', () => {
  let component: ViewLocationFormComponent;
  let fixture: ComponentFixture<ViewLocationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLocationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
