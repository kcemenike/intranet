import { Routes } from '@angular/router'
import { UnauthGuard, AuthGuard } from 'src/app/services/guards'
import { SignInComponent } from './sign-in/sign-in.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { SignOutComponent } from './sign-out/sign-out.component'
import { GateComponent } from './gate.component'
import { FormContract, TokenContract } from 'src/app/services/contracts'

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

export interface GateConfigContract {};

export const signInForm: FormContract = {
  title: 'Login',
  fields: [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
      validators: {
        validation: ['email'],
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter Password',
        required: true,
      },
    },
  ],
  buttonName: 'Login',
}

export const signUpForm: FormContract = {
  title: 'Register an Account with Us',
  fields: [
    {
      key: 'first_name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter First Name',
        required: true,
      },
    },
    {
      key: 'last_name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Last Name',
        placeholder: 'Last Name',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
      validators: {
        validation: ['email'],
      },
    },
    {
      key: 'telephone',
      type: 'input',
      templateOptions: {
        type: 'tel',
        label: 'Mobile Number',
        placeholder: 'Enter mobile number',
        required: false,
      },
      validators: {
        validation: ['tel'],
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter Password',
        required: true,
      },
    },
  ],
  buttonName: 'Register',
}

export const GATE_CONFIG: GateConfigContract = {}