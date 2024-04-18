import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ng-reactive-forms-with-validations',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './ng-reactive-forms-with-validations.component.html',
  styleUrl: './ng-reactive-forms-with-validations.component.css'
})
export class NgReactiveFormsWithValidationsComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) { };

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        postCode: ['', Validators.required]
      })
    });
  }

  addUser() {
    console.log(this.userForm?.value);
  }

}
