import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListFormComponent } from './view-list-form.component';

describe('ViewListFormComponent', () => {
  let component: ViewListFormComponent;
  let fixture: ComponentFixture<ViewListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
