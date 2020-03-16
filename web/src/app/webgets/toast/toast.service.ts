import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  static readonly SUCCESS = 'toast.success'
  static readonly FAILURE = 'toast.failure'

  toasts: any[] = [];

  defaults = {
    [ToastService.SUCCESS]: {
      classname: 'bg-success text-light',
      delay: 5000,
      autohide: true,
      headertext: 'Toast Header'
    },
    [ToastService.FAILURE]: {
      classname: 'bg-danger text-light',
      delay: 5000,
      autohide: true,
      headertext: 'Toast Header'
    },
  }

  show(textOrTpl: string | TemplateRef<any>, type: typeof ToastService.SUCCESS | typeof ToastService.FAILURE, options = {}) {
    this.toasts.push({ textOrTpl, ...this.defaults[type], ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

}
