import { Directive,HostListener,Attribute, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: 'a'
})
export class ADirective {

    private _elem: ElementRef;
    private _renderer: Renderer;
    private _id:string;
    private _herf:string;

    constructor(elem: ElementRef, renderer: Renderer,
    @Attribute('href') href: string,
    @Attribute('id') id: string) {

    this._elem = elem;//.nativeElement;
    this._renderer = renderer;

    this._id=id;
    this._herf=href;

    }
    @HostListener('click',['$event']) 
    onClick(e:Event) {
            if(this._herf!=null){
                if ( this._herf === '' || this._herf === '#') {
                e.preventDefault();
              }
            }
    }

}

