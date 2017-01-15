import { Directive,HostListener,Attribute, ElementRef, Renderer,Input } from '@angular/core';
declare var $:any;
@Directive({
    selector: '[ngSlimScroll]'
})
export class NgSlimScrollDirective {

    @Input() public scrollHeight:string;

    private _elem: ElementRef;
    private _renderer: Renderer;

    constructor(elem: ElementRef, renderer: Renderer) {

    this._elem = elem;
    this._renderer = renderer;
        console.log('NgSlimScrollDirective',this.scrollHeight);

    }

     /**
   * 属性发生更改时
   * @private
   */
  
  ngOnChanges() {
      console.log('slimScrollOptions-->',this.scrollHeight);
       $(this._elem.nativeElement).slimScroll({
    height: '250px'
  });
  }
}