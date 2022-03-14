import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CooperativeHomeComponent } from './cooperative-home/cooperative-home.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: CooperativeHomeComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    CooperativeHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CooperativeModule { }
