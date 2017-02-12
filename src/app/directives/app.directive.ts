import { Directive, HostListener, Attribute, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: 'a'
})
export class ADirective {

    private _elem: ElementRef;
    private _renderer: Renderer;
    private _herf: string;

    constructor(
        elem: ElementRef, 
        renderer: Renderer,
        @Attribute('href') href: string) {

        this._elem = elem;//.nativeElement;
        this._renderer = renderer;

        this._herf = href;

    }
    @HostListener('click', ['$event'])
    onClick(e: Event) {

       // console.log('触发点击事件');

        if (this._herf != null) {
            if (this._herf === '' || this._herf === '#') {
                e.preventDefault();
            }
        }
    }

}

