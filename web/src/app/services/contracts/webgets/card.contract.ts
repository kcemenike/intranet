import { ContentContract } from './content.contract'
import { sizeType } from '../types.contract'
import { SliderContract } from './slider.contract'
import { TableContract } from './table.contract'
import { JSONContract } from '../common/json.contract';

export interface AddressContract extends JSONContract{
    name: string;
    housenumber: string;
    street: string;
    area: string;
    postalcode: number;
    postofficenumber: number;
    state: string;
    region: string;
    country: string;
}

export interface CardContract extends ContentContract{
    slider?: SliderContract;
    stars?: number;
    features?: TableContract;
    comments?: any[];
    QAs?: any[];
    canComment?: boolean;
    size?: sizeType;
    address?: AddressContract;
}
