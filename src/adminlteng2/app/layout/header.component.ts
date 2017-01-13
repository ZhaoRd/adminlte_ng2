import { Component } from '@angular/core';
import { AppConfig }  from '.././app.config';
import { AppComponent }  from '.././app.component';

@Component({
    moduleId:module.id,
    selector: 'my-app-header',
    templateUrl: `header.html`
})
export class HeaderComponent { 

    appConfig:AppConfig;
    constructor(private rootComp: AppComponent) { 
        this.appConfig=rootComp.appConfig;
    }

}
