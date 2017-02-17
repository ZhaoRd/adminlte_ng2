import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { AlertModule,ProgressbarModule ,AccordionModule,
SortableModule,ModalModule    } from 'ng2-bootstrap';

import { FormsModule } from '@angular/forms';
import { AppDirectiveModule } from './directives/app.directivemodule';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AppDirectiveModule,
    FormsModule,
    AlertModule.forRoot(),
    ProgressbarModule.forRoot(),
    AccordionModule .forRoot(),
    SortableModule.forRoot(),
    ModalModule .forRoot()
  ],
  providers: [
    
  ],exports:[
      CommonModule,AppDirectiveModule,
      FormsModule,
      AlertModule,
      ProgressbarModule,
      AccordionModule ,
      SortableModule,
      ModalModule
  ]
})
export class AppCommonModule {
  
}