import { Component,OnInit } from '@angular/core';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'sliders',
    templateUrl: `sliders.html`
})
export class SlidersComponent extends OnInit {

    ngOnInit():void{

        this.initBootstrapSlider();
        
        this.initRange1();
        this.initRange2();
        this.initRange3();
        this.initRange4();
        this.initRange5();
        this.initRange6();


    }

    ngAfterViewInit():void{
        console.log('ngAfterViewInit');
        
    }

    private initBootstrapSlider():void{

        console.log('init bootstrap slider');
        
        
        //$('.slider').slider();

    }

    private initRange1():void{
        /*
 $("#range_1").ionRangeSlider({
      min: 0,
      max: 5000,
      from: 1000,
      to: 4000,
      type: 'double',
      step: 1,
      prefix: "$",
      prettify: false,
      hasGrid: true
    });
*/

    }

    private initRange2():void{
        /*
             $("#range_2").ionRangeSlider();
             */
    }

    private initRange3():void{
        /*
         $("#range_3").ionRangeSlider({
      type: "double",
      postfix: " miles",
      step: 10000,
      from: 25000000,
      to: 35000000,
      onChange: function (obj:any) {
        var t = "";
        for (var prop in obj) {
          t += prop + ": " + obj[prop] + "\r\n";
        }
        $("#result").html(t);
      },
      onLoad: function (obj:any) {
        //
      }
    });
    */
    }
    private initRange4():void{
        /*
        $("#range_4").ionRangeSlider({
      type: "single",
      step: 100,
      postfix: " light years",
      from: 55000,
      hideMinMax: true,
      hideFromTo: false
    });
    */
    }

    private initRange5():void{
        /*
          $("#range_5").ionRangeSlider({
      min: 0,
      max: 10,
      type: 'single',
      step: 0.1,
      postfix: " mm",
      prettify: false,
      hasGrid: true
    });
    */
    }
    private initRange6():void{
        /*
        $("#range_6").ionRangeSlider({
      min: -50,
      max: 50,
      from: 0,
      type: 'single',
      step: 1,
      postfix: "°",
      prettify: false,
      hasGrid: true
    });
    */
    }

 }