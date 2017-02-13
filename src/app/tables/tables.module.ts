import { NgModule } from '@angular/core';
import {AppCommonModule} from './../app.commonmodulte'

import { Routes, RouterModule } from '@angular/router';

import {TablesRoutes} from './tables.route'
/**/
import { SimpleTableComponent } from './simpletables.component';
import { DatatableComponent } from './datatables.component';

@NgModule({
  declarations: [
      /*
      WidgetComponent
      */
      DatatableComponent,
      SimpleTableComponent
  ],
  imports: [
    AppCommonModule,
    RouterModule.forChild(TablesRoutes),
  ],
  exports: [RouterModule]
})
export class TablesModule {

}