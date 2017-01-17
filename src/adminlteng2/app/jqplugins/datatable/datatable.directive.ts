import { Directive,HostListener,Attribute, ElementRef, Renderer,Input } from '@angular/core';
declare var $:any;
@Directive({
    selector: '[ngDatatable]'
})
export class NgDatatableDirective {

    @Input() public ngDatatable:any;

    private _elem: ElementRef;
    private _renderer: Renderer;
    
    constructor(elem: ElementRef, renderer: Renderer) {

        this._elem = elem;
        this._renderer = renderer;

    }

    ngOnChanges() {
        if(this.ngDatatable==null){
            $(this._elem.nativeElement).DataTable();
            return;
        }

        $(this._elem.nativeElement).DataTable(this.ngDatatable);
    }

}