import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast:any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showSuccess(message:string){
    this.show(message, { classname: 'bg-success text-light' });
  }

  showError(message:string){
    this.show(message, { classname: 'bg-danger text-light' });
  }

  showInfo(message:string){
    this.show(message, { classname: 'bg-primary text-light' });
  }
}

