import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '/',
    component: ListComponent,
  },
  {
    path: '/details',
    component: DetailsComponent,
  },
];

@NgModule({})
export class AppRoutingModule {}
