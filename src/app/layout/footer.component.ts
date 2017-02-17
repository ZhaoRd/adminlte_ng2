import { Component,Inject,ViewEncapsulation } from '@angular/core';


import { APPSTATE,AppState } from './../app.state';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FooterComponent { 
    
    constructor(@Inject(APPSTATE) public appState: AppState) { 

        console.log('appState',this.appState);
        
    }
}
