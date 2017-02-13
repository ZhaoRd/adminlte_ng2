import { NgModule } from '@angular/core';
import {AppCommonModule} from './../app.commonmodulte'

import { Routes, RouterModule } from '@angular/router';

import {FormRoutes} from './form.route'

import { FormGenralComponent } from './general.component';
import { FormAdvancedComponent } from './advanced.component';
import { FormEditorComponent } from './editor.component';

@NgModule({
  declarations: [
      FormGenralComponent,
      FormAdvancedComponent,
      FormEditorComponent
  ],
  imports: [
    AppCommonModule,
    RouterModule.forChild(FormRoutes),
  ],
  exports: [RouterModule]
})
export class FormModule {

}