
import { Routes, RouterModule } from '@angular/router';

import { SimpleTableComponent } from './simpletables.component';
import { DatatableComponent } from './datatables.component';

export const TablesRoutes = [
    { path: 'simpletables',  component: SimpleTableComponent },
    { path: 'datatables',  component: DatatableComponent }
];
