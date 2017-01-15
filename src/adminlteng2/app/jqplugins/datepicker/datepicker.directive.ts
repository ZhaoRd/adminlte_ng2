import { Directive,HostListener,Attribute, ElementRef, Renderer,Input } from '@angular/core';
declare var $:any;
@Directive({
    selector: '[ngDatepicker]'
})
export class NgDatepickerDirective {

    @Input() public ngDatepicker:any;


    private _elem: ElementRef;
    private _renderer: Renderer;
    
    constructor(elem: ElementRef, renderer: Renderer) {

        this._elem = elem;
        this._renderer = renderer;

        $(this._elem.nativeElement).datepicker();
        
    }

    ngOnChanges() {
      
    }

}