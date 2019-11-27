import { FormGroup } from '@angular/forms'

import { Observable } from 'rxjs'

import { FormlyFieldConfig } from '@ngx-formly/core'

import { ActionsContract } from './actions.contract'
import { ContentContract } from './content.contract'
import { ImageContract } from '../common/image.contract'
import { PairContract } from '../common/pair.contract'
import { LinkContract } from '../common/link.contract'


export interface FormContract extends ContentContract{
    fields: FormlyFieldConfig[];
    buttonName?: string;
    hasReset?: boolean;
    color?: string;
    resource?: Object;
    summary?: string;
    actions?: ActionsContract[];
}
