
import { Routes, RouterModule } from '@angular/router';

import { ChartJsComponent } from './chartjs.component';
import { EChartComponent } from './echart.component';
import { FlotComponent } from './flot.component';
import { InlineChartComponent } from './inlinechart.component';
import { MorrisComponent } from './morris.component';

export const ChartsRoutes = [
    { path: 'chartjs',  component: ChartJsComponent },
    { path: 'echart',  component: EChartComponent },
    { path: 'flot',  component: FlotComponent },
    { path: 'inlinechart',  component: InlineChartComponent },
    { path: 'morris',  component: MorrisComponent }
];
