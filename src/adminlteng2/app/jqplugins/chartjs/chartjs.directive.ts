import { Directive,HostListener,Attribute, ElementRef, Renderer,Input } from '@angular/core';
declare var $:any;
declare var Chart:any;

@Directive({
    selector: '[ngChartjs]'
})
export class NgChartjsDirective {

    @Input() public ngChartjs:any;


    private _elem: ElementRef;
    private _renderer: Renderer;
    
    private _salesChartCanvas:any;
    private _salesChart:any;

    constructor(elem: ElementRef, renderer: Renderer) {

        this._elem = elem;
        this._renderer = renderer;

        this._salesChartCanvas = $(this._elem.nativeElement).get(0).getContext("2d");
        this._salesChart = new Chart(this._salesChartCanvas);

        //$(this._elem.nativeElement).wysihtml5();
        
    }

    ngOnChanges() {

        var type=this.ngChartjs.type;
        var data=this.ngChartjs.data;
        var opt=this.ngChartjs.option;

        switch(type){
            case "line":{
                this.line(data,opt);
                break;
            }
            case "pie":{
                this.pie(data,opt);
                break;
            }
            case "bar":{
                this.bar(data,opt);
                break;
            }
                
        }
      
    }

    private bar(data:any,option:any):void{
         this._salesChart.Bar(data, option);
    }

    private pie(data:any,option:any):void{
         this._salesChart.Doughnut(data, option);
    }

    private line(data:any,option:any):void{
        this._salesChart.Line(data, option);

    }

}