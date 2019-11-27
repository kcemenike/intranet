import { ActionsContract } from '../webgets/actions.contract'
import { ImageContract } from './image.contract'

export interface PageContract{
    title: string;
    description?: string;
    actions?: ActionsContract[];
    avatar?: ImageContract;
}
