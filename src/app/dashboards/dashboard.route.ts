
import { Routes, RouterModule } from '@angular/router';

import { Dashboard1Component } from './dashboard1.component';

import { Dashboard3Component } from './dashboard3.component';

export const DashboardRoutes = [
  { path: '',
     children: [
    { path: 'dashboard1',  component: Dashboard1Component },
    { path: 'dashboard3', component: Dashboard3Component }
  ]},
];
