import { Component,Inject } from '@angular/core';

import * as Toastr from 'toastr';

@Component({
    selector: 'ui-toastr',
    templateUrl: './toastr.component.html'
})
export class ToastrDemoComponent { 
    
    private toastr:Toastr;
    constructor() { 

        this.toastr=Toastr;
        
        this.toastr.options.closeButton=true;
        this.toastr.options.positionClass="toast-top-center";
        console.log("this.toastr",this.toastr);
    }

    public ngOnInit() {
        
    }

    public errorToastr():void{
        
        this.toastr.error("Error Message","Error");
    }

    public successToastr():void{
        
        this.toastr.success("Success Message","Success");
    }

    public waringToastr():void{
        
        this.toastr.warning("Waring Message","Waring");
    }

    public infoToastr():void{
        
        this.toastr.info("Info Message","Info");
    }

}