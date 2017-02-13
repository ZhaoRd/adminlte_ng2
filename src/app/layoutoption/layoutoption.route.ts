
import { Routes, RouterModule } from '@angular/router';


import { TopnavComponent } from './topnav.component';
import { BoxedComponent } from './boxed.component';
import { FixedComponent } from './fixed.component';
import { CollapsedComponent } from './collapsed.component';


export const LayoutOptionRoutes = [
  { path: '',
     children: [
        
    { path: 'topnav',  component: TopnavComponent },
    { path: 'boxed',  component: BoxedComponent },
    { path: 'fixed',  component: FixedComponent },
    { path: 'collapsed', component: CollapsedComponent }
  ]},
];
