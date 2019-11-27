import { HttpHeaders, HttpParams } from '@angular/common/http'

export interface HttpOptions{
    body?: any;
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    reportProgress?: boolean;
    observe: 'response';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    responseType?: 'json';
    withCredentials?: boolean;
  }
