
import { Routes, RouterModule } from '@angular/router';

import { Dashboard1Component } from './dashboard1.component';

import { Dashboard2Component } from './dashboard2.component';

export const DashboardRoutes = [
  { path: '',
     children: [
    { path: 'dashboard1',  component: Dashboard1Component },
    { path: 'dashboard2', component: Dashboard2Component }
  ]},
];
