import { NgModule } from '@angular/core';
import {AppCommonModule} from './../app.commonmodulte'

import { Routes, RouterModule } from '@angular/router';

import {ChartsRoutes} from './charts.route'

import { ChartJsComponent } from './chartjs.component';
import { EChartComponent } from './echart.component';
import { FlotComponent } from './flot.component';
import { InlineChartComponent } from './inlinechart.component';
import { MorrisComponent } from './morris.component';


@NgModule({
  declarations: [
      ChartJsComponent,EChartComponent,FlotComponent,InlineChartComponent,MorrisComponent
  ],
  imports: [
    AppCommonModule,
    RouterModule.forChild(ChartsRoutes),
  ],
  exports: [RouterModule]
})
export class ChartsModule {

}