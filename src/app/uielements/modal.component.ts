import { Component, Inject, ViewChild ,ViewEncapsulation} from '@angular/core';

import { ModalStaticComponent } from './modal-static.component';
import { ModalResultComponent } from './modal-result.component';

@Component({
    selector: 'ui-modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent {

    @ViewChild('staticModal') staticModal: ModalStaticComponent;
    @ViewChild('resultModal') resultModal: ModalResultComponent;

    public modalResult:string;

    constructor() {


    }

    public ngOnInit() {

    }

    public openStaticModal():void{
        this.staticModal.show();

    }

    public openResultModal():void{
        this.resultModal.show();
    }

    public resultModalClose(event):void{
        console.log(event);
        this.modalResult=event;

    }

}