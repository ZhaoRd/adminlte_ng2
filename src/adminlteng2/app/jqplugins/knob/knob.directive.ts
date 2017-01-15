import { Directive,HostListener,Attribute, ElementRef, Renderer,Input } from '@angular/core';
declare var $:any;
@Directive({
    selector: '[ngKnob]'
})
export class NgKnobDirective {

    @Input() public ngKnob:any;


    private _elem: ElementRef;
    private _renderer: Renderer;
    
    constructor(elem: ElementRef, renderer: Renderer) {

        this._elem = elem;
        this._renderer = renderer;

        $(this._elem.nativeElement).knob();
        
    }

    ngOnChanges() {
      console.log('ngKnob-->',this.ngKnob);
      console.log('ngKnob.fgColor-->',this.ngKnob.fgColor);
      
    }

}