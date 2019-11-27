import { DateTimeContract } from './date-time.contract'

export interface ModelBaseContract{
    id?: string;
    status?: 'pristine' | 'active' | 'inactive';
    createdAt?: DateTimeContract;
    updatedAt?: DateTimeContract;
}
