import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from './webgets/form';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    NgbModule,
    FontAwesomeModule,
  ],
})
export class SharedModule { }
