import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocationFormEditComponent } from './view-location-form-edit.component';

describe('ViewLocationFormEditComponent', () => {
  let component: ViewLocationFormEditComponent;
  let fixture: ComponentFixture<ViewLocationFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLocationFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLocationFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
