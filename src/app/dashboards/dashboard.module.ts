import { NgModule } from '@angular/core';
import {AppCommonModule} from './../app.commonmodulte'
/*
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
*/
import { DashboardRoutes } from './dashboard.route';

import { Routes, RouterModule } from '@angular/router';


import { Dashboard2Component } from './dashboard2.component';
import { Dashboard1Component } from './dashboard1.component';


@NgModule({
  declarations: [
    Dashboard1Component,
    Dashboard2Component
  ],
  imports: [
    /*
    CommonModule,
    FormsModule,
    */
    AppCommonModule,
    RouterModule.forChild(DashboardRoutes),
  ],
  exports: [RouterModule]
})
export class DashboardModule {

}