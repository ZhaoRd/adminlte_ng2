import { Component } from '@angular/core';
import { AppConfig }  from '.././app.config';
import { AppComponent }  from '.././app.component';

@Component({
    selector: 'my-app-header',
    templateUrl: `app/layout/header.html`
})
export class HeaderComponent { 

    appConfig:AppConfig;
    constructor(private rootComp: AppComponent) { 
        this.appConfig=rootComp.appConfig;
    }

}
