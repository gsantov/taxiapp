import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CooperativeListComponent } from './administration/cooperative-list/cooperative-list.component';
import { CooperativeHomeComponent } from './cooperative/cooperative-home/cooperative-home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: CooperativeListComponent },
  { path: 'cooperative', component: CooperativeHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
