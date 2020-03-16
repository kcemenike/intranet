import { FormContract } from 'src/app/services/contracts'

export interface AnalyticsContract{
    id: string;
}

export interface UserConfigContract{
    forms: {
        settings: {
            app: FormContract,
            page: FormContract,
            user: FormContract,
        }
        merchant: FormContract,
    },
}

export const USER_CONFIG = {
  forms: {
    settings: {
      app: null,
      page: null,
      user: null,
    },
    merchant: null
  },
  analytics: {
    entities: null,
    ids: null,
    id: null
  }
}


export const updateProfileForm: FormContract = {
  title: 'Update Your information',
  fields: [
    {
      key: 'first_name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter First Name',
        required: true,
        disabled: true,
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
        disabled: true,
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
  ],
  buttonName: 'Update',
}

export const changePasswordForm = {
  title: 'Security - Change Password',
  fields: [
    {
      key: 'old_password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Old Password',
        placeholder: 'Enter Old Password',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter New Password',
        required: true,
      },
    },
    {
      key: 'password_confirmation',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
        required: true,
      },
    },
  ],
  buttonName: 'Update Password',
}

export const settingsForm: FormContract = {
  title: 'Settings - App Configuration',
  fields: [
      {
        key: 'shippingtype',
        type: 'radio',
        templateOptions: {
          label: 'Shipping Type',
          options: [
              {
                value: 'Shipping Flat Rate',
                key: 'shipping_flat_rate'
              },
              {
                value: 'Shipping Kilometer Rate',
                key: 'shipping_kilometer_rate'
              },
              {
                value: 'Shipping Smart Calculator',
                key: 'shipping_smart_calculator'
              },
              {
                value: 'Customers should pay on delivery',
                key: 'shipping_pay_on_delivery'
              },
              {
                value: 'Free Shipping',
                key: 'free_shipping'
              }
          ],
          required: true,
        }
      },
      {
        key: 'shippingflatrate',
        type: 'input',
        templateOptions: {
          label: 'Shipping Flat Rate',
          required: true,
        },
      },
      {
        key: 'shippingbaserate',
        type: 'input',
        templateOptions: {
          label: 'Shipping Base Rate',
          required: true,
        },
      },
      {
        key: 'shippingkilometerrate',
        type: 'input',
        templateOptions: {
          label: 'Shipping Cost Per Kilometer (km)',
          required: true,
        },
      },
      {
        key: 'shippingweightrate',
        type: 'input',
        templateOptions: {
          label: 'Shipping Cost Per Kilogram (kg)',
          required: true,
        },
      },
  ],
  resource: {},
  buttonName: 'Submit',
}
