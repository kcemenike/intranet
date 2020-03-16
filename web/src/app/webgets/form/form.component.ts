import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  InjectionToken,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { FormContract } from './form.contract'
import { ActionEmitter, deepCopy, untransform } from 'src/app/services/core'
export const WG_FORM_DATA = new InjectionToken<{}>('WG_FORM_DATA')

@Component({
  selector: 'wg-form',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit, OnDestroy, AfterViewInit {
  formGroup = new FormGroup({})
  options: FormlyFormOptions = {}
  payload = {}
  fields: FormlyFieldConfig[] = []

  @Input() form: FormContract
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private actionEmitter: ActionEmitter,
  ) {}

  ngOnInit() {
    // unfreeze input data to solve 'array|object cannot be extented error thrown by ngx-formly'
    this.fields = this.form.fields.map((field) => deepCopy(field))
    // this.payload = deepCopy(untransform(this.filterResourceToModelKeysOnly(this.form.resource)))
  }

  ngAfterViewInit() {}

  ngOnDestroy() {}

  onSubmit(payload: any) {
    this.submitForm.emit(payload)
    this.actionEmitter.emit({
      title: this.form.title,
      type: this.form.type,
      $event: payload,
    })
    this.fields = [...this.fields]
    this.payload = { ...payload }
  }

  onReset() {}

  private filterResourceToModelKeysOnly(resource: Object){
    return (resource) ? Object.keys(resource).filter((r) => {
      return [...this.fields.map(f => f.key), 'id'].includes(r)
    }).reduce((prev, curr) => {
      return { ...prev, [curr]: this.form.resource[curr] }
    }, {}) : {}
  }
}
