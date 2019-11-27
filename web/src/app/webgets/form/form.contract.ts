import { FormlyFieldConfig } from '@ngx-formly/core'
import { ContentContract, ActionsContract } from 'src/app/services/contracts';


export interface FormContract extends ContentContract{
    fields: FormlyFieldConfig[];
    buttonName?: string;
    buttonClass?: string;
    hasReset?: boolean;
    color?: string;
    resource?: Object;
    description?: string;
    actions?: ActionsContract[];
    type?: string;
}
