import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes=[
	{
		path:'',
		redirectTo:'dashboard/dashboard1',
		pathMatch:'full'
	},
	{ path: 'dashboard', loadChildren: './dashboards/dashboard.module#DashboardModule'},
	{
		path:'**',//fallback router must in the last
		component:AppComponent
	}
];
