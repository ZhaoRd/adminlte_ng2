
import {
  NgModule,
  ApplicationRef
} from '@angular/core';

import { ADirective } from './app.directive';

@NgModule({
  declarations: [
      ADirective
  ],
  imports: [
  ],exports:[
      ADirective
  ]
})
export class AppDirectiveModule {


}