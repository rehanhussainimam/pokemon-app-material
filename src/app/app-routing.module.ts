import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/pages/details/details.component';
import { ListComponent } from './components/pages/list/list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [],
})
export class AppRoutingModule {}
