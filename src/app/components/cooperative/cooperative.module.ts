import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CooperativeHomeComponent } from './cooperative-home/cooperative-home.component';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { CooperativeProfileComponent } from './cooperative-profile/cooperative-profile.component';
import { CooperativeDriversComponent } from './cooperative-drivers/cooperative-drivers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from "primeng/divider";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgChartsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    TableModule,
    InputTextModule,
    DialogModule,
    DividerModule,
    NgbModule
  ]
})
export class CooperativeModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
