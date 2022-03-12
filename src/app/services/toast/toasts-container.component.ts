import { Component, TemplateRef } from '@angular/core';

import { ToastService } from './toast.service';


@Component({
    selector: 'app-toasts',
    template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hidden)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"> X</ng-template> 
      </ng-template>

        <ng-template #text>
        <div class="row">
            <div class="col-md-10 col-sm-10 col-10">
                {{ toast.textOrTpl }}
            </div>
            <div class="col-md-2 col-sm-2 col-2 close-toast-btn" (click)="toastService.remove(toast)">
                <fa-icon [icon]="['fas', 'times']"></fa-icon>
            </div>
        </div>
        </ng-template>
    </ngb-toast>
  `,
    host: { 'class': 'toast-container position-fixed top-0 end-0 p-3', 'style': 'z-index: 1200' }
})
export class ToastsContainer {
    constructor(public toastService: ToastService) { }

    isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }
}
