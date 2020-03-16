import { Component, TemplateRef } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'wg-toast',
  template: `<ngb-toast
    *ngFor="let toast of toastService.toasts"
    [header]="toast.headertext"
    [class]="toast.classname"
    [delay]="toast.delay || 5000"
    (hide)="hide(toast)"
    [autohide]="autohide"
    (mouseenter)="autohide = false"
    (mouseleave)="autohide = true"
    [class.bg-warning]="!autohide"
    >
    <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
    </ng-template>

    <ng-template #text>{{ toast.textOrTpl }}</ng-template>
  </ngb-toast>
`,
  host: { '[class.ngb-toasts]': 'true' }
})
export class ToastComponent {

  show = false;
  autohide = true;

  constructor(public toastService: ToastService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

  hide(toast) {
    this.show = false;
    this.autohide = true;
    this.toastService.remove(toast)
  }
}
