

import { Component, ViewChild,Output,EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';

@Component({
    selector: 'modal-result',
    templateUrl: './modal-result.component.html'
})
export class ModalResultComponent {

    @ViewChild('resultModal') modal: ModalDirective;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    onShown(): void {
        
    }

    close(): void {
        
        this.modal.hide();
    }

    show(): void {
        
            this.modal.show();
    }

    save():void{
        this.close();
        var random = Math.floor(Math.random()*(1001));
        this.modalSave.emit('我是返回内容,产生的随机值:'+random);
    }

}

