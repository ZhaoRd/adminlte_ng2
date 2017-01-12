import { NgModule }      from '@angular/core';
import { RouterModule ,Routes }   from '@angular/router';

import {DashboardComponent} from './pages/dashboards/dashboard1.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard1', pathMatch: 'full' },
  { path: 'dashboard1',  component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}