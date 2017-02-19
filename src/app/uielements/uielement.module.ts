import { NgModule } from '@angular/core';
import {AppCommonModule} from './../app.commonmodulte'

import { Routes, RouterModule } from '@angular/router';

import {UiElementRoutes} from './uielement.route'

import { ButtonsComponent } from './buttons.component';
import { GeneralComponent } from './general.component';
import { IconComponent } from './icon.component';
import { ModalComponent } from './modal.component';

import { SliderComponent } from './slider.component';
import { TimelineComponent } from './timeline.component';
import { SortableDemoComponent } from './sortable.component';

import { ModalStaticComponent } from './modal-static.component';
import { ModalResultComponent } from './modal-result.component';

import { ToastrDemoComponent } from './toastr.component';

@NgModule({
  declarations: [
      ButtonsComponent,
      GeneralComponent,
      IconComponent,
      ModalComponent,
      SliderComponent,
      TimelineComponent,
      SortableDemoComponent,
      ModalStaticComponent,
      ModalResultComponent,
      ToastrDemoComponent
  ],
  imports: [
    AppCommonModule,
    RouterModule.forChild(UiElementRoutes),
  ],
  exports: [RouterModule]
})
export class UiElementModule {

}