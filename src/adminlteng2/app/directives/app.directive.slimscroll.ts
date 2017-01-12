import { Directive,HostListener,Attribute, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[slimScroll]'
})
export class SlimScrollDirective {

    private _elem: ElementRef;
    private _renderer: Renderer;
    private _id:string;
    private _herf:string;

    constructor(elem: ElementRef, renderer: Renderer,
    @Attribute('href') href: string) {

    this._elem = elem;//.nativeElement;
    this._renderer = renderer;
/*
       var slimscroll= this._elem.nativeElement.slimscroll({
            height: "200px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
          });
          */

          //console.log(slimscroll);

    }
/* 
    @HostListener('click',['$event']) 
    onClick(e:Event) {
            if(this._herf!=null){
                if ( this._herf === '' || this._herf === '#') {
                e.preventDefault();
              }
            }
    }
*/
}