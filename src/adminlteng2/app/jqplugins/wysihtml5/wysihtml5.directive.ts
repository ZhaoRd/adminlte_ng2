import { Directive,HostListener,Attribute, ElementRef, Renderer,Input } from '@angular/core';
declare var $:any;
@Directive({
    selector: '[ngWysihtml5]'
})
export class NgWysihtml5Directive {

    @Input() public ngWysihtml5:any;


    private _elem: ElementRef;
    private _renderer: Renderer;
    
    constructor(elem: ElementRef, renderer: Renderer) {

        this._elem = elem;
        this._renderer = renderer;

        $(this._elem.nativeElement).wysihtml5();
        
    }

    ngOnChanges() {
      
    }

}