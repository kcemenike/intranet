import { DateTimeContract, CardContract, TableContract } from '../services/contracts';

export type StatusType = 'pristine' | 'active' | 'inactive'

export class Entity {
  id?: string
  status?: StatusType
  createdAt?: DateTimeContract
  updatedAt?: DateTimeContract
  card?: CardContract
  table?: TableContract
}
