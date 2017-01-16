import { NgModule  }      from '@angular/core';
import {NgSlimScrollDirective} from './slimscroll/slimscroll.directive'
import {NgKnobDirective} from './knob/knob.directive'
import {NgWysihtml5Directive} from './wysihtml5/wysihtml5.directive'

import {NgDatepickerDirective} from './datepicker/datepicker.directive'
import {NgDaterangepickerDirective} from './datepicker/daterangepicker.directive'


import {NgSparklineChartDirective} from './sparklineChart/sparklinechart.directive'

import {NgVectorMapDirective} from './vectorMap/vectormap.directive'
import {NgSortableDirective} from './sortable/sortable.directive'
import {NgEchartDirective} from './echart/echart.directive'
import {NgChartjsDirective} from './chartjs/chartjs.directive'


@NgModule({
  imports:      [ ],
  declarations: [ 
      NgSlimScrollDirective,
      NgKnobDirective,NgWysihtml5Directive,NgDatepickerDirective,
      NgDaterangepickerDirective,
      NgSparklineChartDirective,
      NgVectorMapDirective,
      NgSortableDirective,NgEchartDirective,NgChartjsDirective

    ],
    exports: [ NgSlimScrollDirective,NgKnobDirective ,
    NgWysihtml5Directive,NgDatepickerDirective,
    NgDaterangepickerDirective,
    NgSparklineChartDirective,
    NgVectorMapDirective,
    NgSortableDirective,
    NgEchartDirective,NgChartjsDirective]
})
export class NgJqueryModule { 

}




