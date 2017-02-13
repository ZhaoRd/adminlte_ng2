import { NgModule } from '@angular/core';
import {AppCommonModule} from './../app.commonmodulte'

import { Routes, RouterModule } from '@angular/router';

import {CalendarRoutes} from './calendar.route'
/**/
import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [
      /**/
      CalendarComponent
      
  ],
  imports: [
    AppCommonModule,
    RouterModule.forChild(CalendarRoutes),
  ],
  exports: [RouterModule]
})
export class CalendarModule {

}