import { Component,Inject } from '@angular/core';

declare var $:any;


console.log('`dashboard3` component loaded asynchronously');


@Component({
    selector: 'dashboard3',
    templateUrl: './dashboard3.html'
})
export class Dashboard3Component { 
    
    constructor() { 


        
    }

  public ngOnInit() {
    console.log('hello ` Dashboard3` component',$);
    $().ready(function(){
        console.log('jquery ready');
    });
    // this.title.getData().subscribe(data => this.data = data);
  }


}
