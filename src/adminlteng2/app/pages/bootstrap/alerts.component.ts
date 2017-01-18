import { Component,SecurityContext  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    moduleId:module.id,
    selector: 'alertsdemo',
    templateUrl: `alerts.html`
})
export class AlertsDemoComponent {


 public constructor(sanitizer: DomSanitizer) {
    this.dynamicHtml.alerts = this.dynamicHtml.alerts.map((alert:any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
    }));
  }

    ngOnInit():void{

    }

public dynamicHtml:any={
    alerts:[
    {
      type: 'success',
      msg: `<strong>Well done!</strong> You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`
    }
  ]
} 


public alerts: any = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];
 
  public reset(): void {
    this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
  }

 }