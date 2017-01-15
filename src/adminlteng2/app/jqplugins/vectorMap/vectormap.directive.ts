import { Directive,HostListener,Attribute, ElementRef, Renderer,Input } from '@angular/core';
declare var $:any;
@Directive({
    selector: '[ngVectorMap]'
})
export class NgVectorMapDirective {

    @Input() public ngVectorMap:any;


    private _elem: ElementRef;
    private _renderer: Renderer;
    
    constructor(elem: ElementRef, renderer: Renderer) {

        this._elem = elem;
        this._renderer = renderer;

       // $(this._elem.nativeElement).wysihtml5();
        
    }

    ngOnChanges() {
        console.log('this.ngVectorMap',this.ngVectorMap);
      $(this._elem.nativeElement).vectorMap(
          this.ngVectorMap
      );}

}