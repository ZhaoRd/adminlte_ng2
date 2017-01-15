import { NgModule  }      from '@angular/core';
import {NgSlimScrollDirective} from './slimscroll/slimscroll.directive'
import {NgKnobDirective} from './knob/knob.directive'
import {NgWysihtml5Directive} from './wysihtml5/wysihtml5.directive'

import {NgDatepickerDirective} from './datepicker/datepicker.directive'


import {NgSparklineChartDirective} from './sparklineChart/sparklinechart.directive'



@NgModule({
  imports:      [ ],
  declarations: [ 
      NgSlimScrollDirective,
      NgKnobDirective,NgWysihtml5Directive,NgDatepickerDirective,
      NgSparklineChartDirective
    ],
    exports: [ NgSlimScrollDirective,NgKnobDirective ,
    NgWysihtml5Directive,NgDatepickerDirective,NgSparklineChartDirective]
})
export class NgJqueryModule { 

}




