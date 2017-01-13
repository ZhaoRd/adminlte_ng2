import { NgModule }      from '@angular/core';
import { RouterModule ,Routes }   from '@angular/router';

import {DashboardComponent} from './pages/dashboards/dashboard1.component'
import {Dashboard2Component} from './pages/dashboards/dashboard2.component'
import {WidgetIndexComponent} from './pages/widgets/widgetindex.component'

/*charts import*/
import {ChartJsComponent} from './pages/charts/chartjs.component'
import {FlotComponent} from './pages/charts/flot.component'
import {InlineChartComponent} from './pages/charts/inlinechart.component'
import {MorrisChartComponent} from './pages/charts/morris.component'


/*charts import*/

const routes: Routes = [
  { path: '', redirectTo: '/dashboard1', pathMatch: 'full' },
  { path: 'dashboard1',  component: DashboardComponent },
  { path: 'dashboard2',  component: Dashboard2Component },
  { path: 'widget',  component: WidgetIndexComponent },
  /* charts start */
  { path: 'chartjs',  component: ChartJsComponent },
  { path: 'flotchart',  component: FlotComponent },
  { path: 'inlinechart',  component: InlineChartComponent },
  { path: 'morrischart',  component: MorrisChartComponent },
  
  /* charts end */
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations:[
    DashboardComponent,
    Dashboard2Component,
    WidgetIndexComponent,
    /** charts */
    ChartJsComponent,
    FlotComponent,
    InlineChartComponent,
    MorrisChartComponent
    /** charts */
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}