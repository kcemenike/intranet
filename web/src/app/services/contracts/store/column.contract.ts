import { ValidatorFn } from '@angular/forms'

import { Observable } from 'rxjs'

import { FormlyFieldConfig } from '@ngx-formly/core'

export interface DBColumnContract {
  tableCatalog: string
  tableSchema: string
  tableComment: string
  tableName: string
  columnName: string
  ordinalPosition: string
  columnDefault: string
  isNullable: string
  dataType: string
  characterMaximumLength: string
  characterOctetLength: string
  numericPrecision: string
  numericScale: string
  datetimePrecision: string
  characterSetName: string
  collationName: string
  columnType: string
  columnKey: string
  extra: string
  privileges: string
  columnComment: string
  generationExpression: string
}

export interface ColumnContract {
  originalName: string
  name: string
  position: number
  default: string
  isRequired: boolean
  type: string
  maxLength: number
  comment: string
  fullType: string
  field: FormlyFieldConfig
  options: string[]
  rules: ValidatorFn
  controlType: string
  inputType?: string
  placeholder: string
}

export interface ColumnOption {
  key: string
  title: string
  value: string
}
