import { ImageContract } from './image.contract'
import { LinkContract } from './link.contract'
import { ContactContract } from './contact.contract'

export interface BrandContract{
    name: string;
    slogan: string;
    logo: ImageContract;
    smallLogo?: ImageContract;
    bigLogo?: ImageContract;
    url?: LinkContract;
    contact: ContactContract;
}
