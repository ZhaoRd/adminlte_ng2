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


/*ui element import*/
import {ButtonsComponent} from './pages/uiElements/buttons.component'
import {GeneralComponent} from './pages/uiElements/general.component'
import {IconsComponent} from './pages/uiElements/icons.component'
import {ModalsComponent} from './pages/uiElements/modals.component'
import {SlidersComponent} from './pages/uiElements/sliders.component'
import {TimeLineComponent} from './pages/uiElements/timeline.component'

/*ui element import*/

/* form import*/
import {FormAdvancedComponent} from './pages/forms/advanced.component'
import {FormEditorsComponent} from './pages/forms/editors.component'
import {FormGeneralComponent} from './pages/forms/general.component'

/* form import*/

/* tables import*/
import {DataTablesComponent} from './pages/tables/datatables.component'
import {SimpleTablesComponent} from './pages/tables/simpletables.component'
/* tables import*/

/* calendar import*/
import {CalendarIndexComponent} from './pages/calendars/calendarindex.component'
/* calendar import*/

/* mails import*/
import {MailComposeComponent} from './pages/mailbox/mailcompose.component'
import {MailReadComponent} from './pages/mailbox/mailread.component'
import {MailInboxComponent} from './pages/mailbox/mailinbox.component'
/* mails import*/

/* example import*/
import {BlankPageComponent} from './pages/examples/blankpage.component'
import {Error404Component} from './pages/examples/error404.component'
import {Error500Component} from './pages/examples/error500.component'
import {InvoiceComponent} from './pages/examples/invoice.component'
import {PacePageComponent} from './pages/examples/pacepage.component'
import {ProfileComponent} from './pages/examples/profile.component'
/* example import*/


import {NgJqueryModule} from './jqplugins/ngjquery.module'

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

  /* ui element */
  { path: 'buttons',  component: ButtonsComponent },
  { path: 'general',  component: GeneralComponent },
  { path: 'icons',  component: IconsComponent },
  { path: 'modals',  component: ModalsComponent },
  { path: 'sliders',  component: SlidersComponent },
  { path: 'timeline',  component: TimeLineComponent },

  /* ui element */



  /* forms */
  { path: 'formAdvanced',  component: FormAdvancedComponent},
  { path: 'formEditors',  component: FormEditorsComponent },
  { path: 'formGeneral',  component: FormGeneralComponent },
  
  /* forms */

  /* tables */
  { path: 'simpletables',  component: SimpleTablesComponent },
  { path: 'datatables',  component: DataTablesComponent },
  
  /* tables */

  /* calendar */
  { path: 'calendarindex',  component: CalendarIndexComponent },
  /* calendar */

  /* mails */
  { path: 'mailinbox',  component: MailInboxComponent },
  { path: 'mailcompose',  component: MailComposeComponent },
  { path: 'mailread',  component: MailReadComponent },
  /* mails */

  /* example */
  { path: 'blankpage',  component: BlankPageComponent },
  { path: 'error404',  component: Error404Component },
  { path: 'error500',  component: Error500Component },
  { path: 'invoice',  component: InvoiceComponent },
  { path: 'pacepage',  component: PacePageComponent },
  { path: 'profile',  component: ProfileComponent }
  /* example */

];

@NgModule({
  imports: [ RouterModule.forRoot(routes),NgJqueryModule ],
  declarations:[
    DashboardComponent,
    Dashboard2Component,
    WidgetIndexComponent,
    /** charts */
    ChartJsComponent,
    FlotComponent,
    InlineChartComponent,
    MorrisChartComponent,
    /** charts */

    /** ui element */
    ButtonsComponent,
    GeneralComponent,
    IconsComponent,
    ModalsComponent,
    SlidersComponent,
    TimeLineComponent,
    /** ui element */

    /** form */
    FormAdvancedComponent,
    FormEditorsComponent,
    FormGeneralComponent,
    /** form */

    /** tables */
    SimpleTablesComponent,
    DataTablesComponent  ,
    /** tables */

    /** calendar */
    CalendarIndexComponent,
    /** calendar */

    /** mailbox */
    MailComposeComponent,
    MailReadComponent,
    MailInboxComponent,
    /** mailbox */

    /** example */
    BlankPageComponent,
    Error404Component,
    Error500Component,
    InvoiceComponent,
    PacePageComponent,
    ProfileComponent
    /** example */

  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}