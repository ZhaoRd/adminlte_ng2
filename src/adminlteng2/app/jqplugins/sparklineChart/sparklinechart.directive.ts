import { Directive,HostListener,Attribute, ElementRef, Renderer,Input } from '@angular/core';
declare var $:any;
@Directive({
    selector: '[ngSparklineChart]'
})
export class NgSparklineChartDirective {

    @Input() public ngSparklineChart:any;

    private _elem: ElementRef;
    private _renderer: Renderer;
    
    constructor(elem: ElementRef, renderer: Renderer/*,
    @Input() ngSparklineChart:any*/) {

        this._elem = elem;
        this._renderer = renderer;
        console.log('ngSparklineChart: constructor',this.ngSparklineChart);

      //  $(this._elem.nativeElement).wysihtml5();
        
    }

    ngOnChanges() {
        console.log('ngSparklineChart:',this.ngSparklineChart);
       $(this._elem.nativeElement).sparkline(
           this.ngSparklineChart.values,
           this.ngSparklineChart.options
       );
    }

}