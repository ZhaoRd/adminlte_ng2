import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { FormsModule } from '@angular/forms';
import { AppDirectiveModule } from './directives/app.directivemodule'


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AppDirectiveModule,
    FormsModule
  ],
  providers: [
    
  ],exports:[
      CommonModule,AppDirectiveModule,
      FormsModule
  ]
})
export class AppCommonModule {
  
}