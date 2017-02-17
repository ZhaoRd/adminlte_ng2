import { Component, Inject, ViewChild ,ViewEncapsulation} from '@angular/core';

import { ModalStaticComponent } from './modal-static.component';

@Component({
    selector: 'ui-modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent {

    @ViewChild('staticModal') staticModal: ModalStaticComponent;

    constructor() {


    }

    public ngOnInit() {

    }

    public openStaticModal():void{
        console.log('openStaticModal');
        this.staticModal.show();

    }

}