import { Component,Inject } from '@angular/core';

import { AppConfig }  from '.././app.config';

import { AppComponent }  from '.././app.component';

@Component({
    selector: 'my-app-footer',
    templateUrl: `app/layout/footer.html`
})
export class FooterComponent { 
  
    appConfig:AppConfig;
    constructor(private rootComp: AppComponent) { 
        this.appConfig=rootComp.appConfig;
    }
 /**/
}
