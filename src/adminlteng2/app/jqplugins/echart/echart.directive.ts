import { Directive,HostListener,Attribute, ElementRef, Renderer,Input } from '@angular/core';

const echarts = require('echarts');

@Directive({
    selector: '[ngEchart]'
})
export class NgEchartDirective {

    @Input() public ngEchart:any;

    private _elem: ElementRef;
    private _renderer: Renderer;
    private _echart:any;
    constructor(elem: ElementRef, renderer: Renderer) {

        this._elem = elem;
        this._renderer = renderer;
        
    }

    ngOnChanges() {

       // var myechart=echarts.init(this._elem.nativeElement);

        if(this._echart==null){
            this._echart = echarts.init(this._elem.nativeElement);
        }
        console.log("NgEchartDirective",this._echart);
        if(this._echart!=null){
            this._echart.setOption(this.ngEchart);
        }
         
      
    }

}