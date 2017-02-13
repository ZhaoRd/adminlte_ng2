import { NgModule } from '@angular/core';
import {AppCommonModule} from './../app.commonmodulte'

import { LayoutOptionRoutes } from './layoutoption.route';

import { Routes, RouterModule } from '@angular/router';

import { TopnavComponent } from './topnav.component';
import { BoxedComponent } from './boxed.component';
import { FixedComponent } from './fixed.component';
import { CollapsedComponent } from './collapsed.component';

@NgModule({
  declarations: [
    TopnavComponent,
    BoxedComponent,
    FixedComponent,
    CollapsedComponent
  ],
  imports: [
    AppCommonModule,
    RouterModule.forChild(LayoutOptionRoutes),
  ],
  exports: [RouterModule]
})
export class LayoutOptionModule {

}