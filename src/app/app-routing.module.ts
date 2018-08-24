import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent }      from './user/user.component';
import { CarsComponent }      from './cars/cars.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { UserDetailComponent }      from './user-detail/user-detail.component';
import { FormComponent }      from './form/form.component';
import { PageNotFoundComponent }      from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: FormComponent },
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
  declarations: []
}) 

export class AppRoutingModule { 
}
