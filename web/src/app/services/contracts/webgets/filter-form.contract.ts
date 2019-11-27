import { Observable } from 'rxjs'

export type FiltersFormType = string | 'string' | 'boolean' | 'time' | 'number'

export interface FiltersFormContract {
  type?: FiltersFormType
  title: string
  options?: any[]
  attributes?: any
}

export interface FilterEvent {}
