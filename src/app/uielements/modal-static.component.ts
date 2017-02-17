

import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';

@Component({
    selector: 'modal-static',
    templateUrl: './modal-static.component.html'
})
export class ModalStaticComponent {

    @ViewChild('staticModal') modal: ModalDirective;

    onShown(): void {
        console.log('static modal opend');
    }

    close(): void {
        
        this.modal.hide();
    }

     show(): void {
        
            this.modal.show();
    }
}

