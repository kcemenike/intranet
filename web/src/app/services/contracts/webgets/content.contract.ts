import { WebgetContract } from './webget.contract'
import { MetaContract } from '../common/meta.contract'
import { ImageContract } from '../common/image.contract'

export interface ContentContract extends WebgetContract{
    meta?: MetaContract[];
    tags?: (string | number)[];
    images?: ImageContract[];
    bold?: string | number;
    shy?: string | number;
}
