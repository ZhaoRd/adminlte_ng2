import { Component,Inject } from '@angular/core';

import { AppConfig }  from '.././app.config';

import { AppComponent }  from '.././app.component';

@Component({
    moduleId:module.id,
    selector: 'my-app-footer',
    templateUrl: `footer.html`
})
export class FooterComponent { 
  
    appConfig:AppConfig;
    constructor(private rootComp: AppComponent) { 
        this.appConfig=rootComp.appConfig;
    }
}
