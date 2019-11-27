import { Params } from '@angular/router'

export interface LinkContract{
    title?: string;
    url?: string;
    children?: LinkContract[];
    queryParams?: Params;
    fragment?: string;
    Id?: string;
    icon?: string;
    label?: string;
}
