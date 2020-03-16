import { Routes } from '@angular/router';
import { GateComponent } from './gate.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';

export const GATE_ROUTES: Routes = [
    {
      path: '',
      component: GateComponent,
      children: [
        {
          path: 'sign-in',
          component: SignInComponent,
  
        },
        {
          path: 'sign-up',
          component: SignUpComponent,
        },
        {
          path: 'sign-out', 
          component: SignOutComponent,
        },
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'sign-up'
        }
      ]
    },
  ]