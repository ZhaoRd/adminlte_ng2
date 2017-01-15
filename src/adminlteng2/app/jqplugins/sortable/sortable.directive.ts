import { Directive,HostListener,Attribute, ElementRef, Renderer,Input } from '@angular/core';
declare var $:any;
@Directive({
    selector: '[ngSortable]'
})
export class NgSortableDirective {

    @Input() public ngSortable:any;


    private _elem: ElementRef;
    private _renderer: Renderer;
    
    constructor(elem: ElementRef, renderer: Renderer) {

        this._elem = elem;
        this._renderer = renderer;
        
    }

    ngOnChanges() {
      $(this._elem.nativeElement).sortable(this.ngSortable);
    }

}