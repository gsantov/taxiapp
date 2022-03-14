import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CooperativeHomeComponent } from './cooperative-home/cooperative-home.component';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { CooperativeProfileComponent } from './cooperative-profile/cooperative-profile.component';
import { CooperativeDriversComponent } from './cooperative-drivers/cooperative-drivers.component';

export const routes = [
  { path: '', component: CooperativeHomeComponent, pathMatch: 'full' },
  { path: 'profile', component: CooperativeProfileComponent },
  { path: 'drivers', component: CooperativeDriversComponent },
];

@NgModule({
  declarations: [
    CooperativeHomeComponent,
    CooperativeProfileComponent,
    CooperativeDriversComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule ,
    RouterModule.forChild(routes)
  ]
})
export class CooperativeModule { }
