import { LinkContract } from '../common/link.contract'

export interface ActionsContract extends LinkContract {
    index?: number;
    type?: string | 'link' | 'button' | 'raised-button' | 'icon-button'| 'mat-fab' | 'mat-mini-fab';
    data?: Object;
    isBreadcrumb?: boolean;
    children?: ActionsContract[];
    column?: boolean;
}
