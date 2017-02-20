import { Component,Inject } from '@angular/core';

import * as SweetAlert from 'sweetalert';

@Component({
    selector: 'ui-sweetalert',
    templateUrl: './sweetalert.component.html'
})
export class SweetalertDemoComponent { 
    
    constructor() { 

        
    }

    public ngOnInit() {
        
    }

    public error():void{
        SweetAlert("Error","Error Alert","error");
    }

    public success():void{
        SweetAlert("Success","Success Alert","success");
    }

    public waring():void{
        SweetAlert("Waring","Waring Alert","warning");
    }

    public info():void{
        SweetAlert("Info","Info Alert","info");
    }

    public confim():void{

        SweetAlert({
                title: "Are you sure?",
                text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false,
                closeOnCancel: false
        },(isConfirm)=>{
            
            if(isConfirm){
                SweetAlert("Success","You are sure","success");
            }else{
                SweetAlert("Waring","You are  cancel","warning");
            }
            
        });

    }
    
    public input():void{

        SweetAlert({
                title: "An input!",
                text: "Write something interesting:",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                inputPlaceholder: "Write something"
        },(inputValue)=>{
            
            if (inputValue === false) return false;
            if (inputValue === "") {
                SweetAlert("Error","You need to write something","error");
                //swal.showInputError("You need to write something!");
                return false;
            }
            var msg="You wrote: " + inputValue
            SweetAlert("Nice",msg,"success");
            //swal("Nice!", "You wrote: " + inputValue, "success");
            
        });

    }

}