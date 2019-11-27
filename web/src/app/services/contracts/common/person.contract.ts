import { ImageContract } from './image.contract'

export interface PersonContract{
    name: string;
    summary?: string;
    avatar?: ImageContract;
}
