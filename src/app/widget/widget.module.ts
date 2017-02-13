import { NgModule } from '@angular/core';
import {AppCommonModule} from './../app.commonmodulte'

import { Routes, RouterModule } from '@angular/router';

import {WidgetRoutes} from './widget.route'

import { WidgetComponent } from './widget.component';

@NgModule({
  declarations: [
      WidgetComponent
  ],
  imports: [
    AppCommonModule,
    RouterModule.forChild(WidgetRoutes),
  ],
  exports: [RouterModule]
})
export class WidgetModule {

}