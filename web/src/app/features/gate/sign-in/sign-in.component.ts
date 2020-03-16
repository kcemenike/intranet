import { Component, OnInit } from '@angular/core';
import { FormContract, UserContract } from 'src/app/services/contracts';
import { GateService } from '../gate.service';

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

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signIn: FormContract = signInForm;

  constructor (
    private gate: GateService,
  ) {}

  ngOnInit () { }

  onSubmit (payload: any) {
    console.log({payload})
    this.gate.signInStart(payload as UserContract)
  }
}
