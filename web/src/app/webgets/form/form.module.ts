import { NgModule } from '@angular/core'
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core'
import { FormControl, ValidationErrors, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

export function emailValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" is not a valid email address.`;
}

export function emailValidator(control: FormControl): ValidationErrors {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value) ? null : { 'email': true };
}

export function telValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" is not a valid telephone number.`;
}

export function telValidator(control: FormControl): ValidationErrors {
  return /^[0-9]*$/.test(control.value) ? null : { 'tel': true };
}

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [],      
      validators: [
        { name: 'email', validation: emailValidator },
        { name: 'tel', validation: telValidator },
      ],
      validationMessages: [
        { name: 'email', message: emailValidatorMessage },
        { name: 'tel', message: telValidatorMessage },
      ],
    }),
  ],
  exports: [
    FormComponent,
  ],
})
export class FormModule {}
