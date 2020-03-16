import { FormContract, UserContract } from 'src/app/services/contracts'

export interface GateConfigContract {
  user: UserContract
};

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

export const GATE_CONFIG: GateConfigContract = {
  user: {}
}