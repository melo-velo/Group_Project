import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListFormEditComponent } from './view-list-form-edit.component';

describe('ViewListFormEditComponent', () => {
  let component: ViewListFormEditComponent;
  let fixture: ComponentFixture<ViewListFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewListFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
