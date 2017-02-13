import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes=[
	
	{ path: 'dashboard', loadChildren: './dashboards/dashboard.module#DashboardModule'},
	{ path: 'layout', loadChildren: './layoutoption/layoutoption.module#LayoutOptionModule'},
	{ path: 'widget', loadChildren: './widget/widget.module#WidgetModule'},
	{ path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
	{ path: 'ui', loadChildren: './uielements/uielement.module#UiElementModule'},
	{ path: 'forms', loadChildren: './forms/form.module#FormModule'},
	{ path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
	{ path: 'calendarindex', loadChildren: './calendar/calendar.module#CalendarModule'},
	{
		path:'',
		redirectTo:'dashboard/dashboard1',
		pathMatch:'full'
	},
	{
		path:'**',//fallback router must in the last
		component:AppComponent
	}
];
