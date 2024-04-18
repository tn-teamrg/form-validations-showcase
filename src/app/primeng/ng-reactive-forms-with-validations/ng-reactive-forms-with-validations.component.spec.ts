import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgReactiveFormsWithValidationsComponent } from './ng-reactive-forms-with-validations.component';

describe('NgReactiveFormsWithValidationsComponent', () => {
  let component: NgReactiveFormsWithValidationsComponent;
  let fixture: ComponentFixture<NgReactiveFormsWithValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgReactiveFormsWithValidationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgReactiveFormsWithValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
