import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AccordionModule,AlertModule  } from 'ng2-bootstrap/ng2-bootstrap';


/* bootstrap */
import {AccordionDemoComponent
  } from './bootstrap/accordion.component'


import {AlertsDemoComponent
  } from './bootstrap/alerts.component'


/* bootstrap */


const routes: Routes = [
    /*
    { path: '', redirectTo: 'bsaccordion', pathMatch: 'full'},
  */
        { path: 'bsaccordion',  component: AccordionDemoComponent },
        { path: 'bsalerts',  component: AlertsDemoComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    CommonModule,FormsModule],
    declarations:[
        AccordionDemoComponent,AlertsDemoComponent
    ],
    exports: [RouterModule],
})
export class PagesRoutingModule { }