import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GateComponent } from './gate.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [GateComponent, SignInComponent, SignOutComponent, SignUpComponent],
  imports: [
    CommonModule
  ]
})
export class GateModule { }
