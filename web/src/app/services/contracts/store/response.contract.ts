import { DBColumnContract } from './column.contract'

export interface Response<M>{
    status?: string | 'success' | 'fail' | 'error';
    data?: M[] | M | DBColumnContract | DBColumnContract[] |any;
    message?: string;
    code?: number;
}
