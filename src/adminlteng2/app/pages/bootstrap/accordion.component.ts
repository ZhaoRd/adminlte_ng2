import { Component } from '@angular/core';
import { AccordionConfig } from 'ng2-bootstrap/ng2-bootstrap';

// such override allows to keep some initial values
 
export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), {closeOthers: false});
}

@Component({
    moduleId:module.id,
    selector: 'accordiondemo',
    templateUrl: `accordion.html`,
    styles:[`

    .card.customClass, .card.customClass .card-header, .panel.customClass {
    background-color: #5bc0de;
    color: #fff;
}
.panel.customClass .panel-body {
    background-color: #337aa7;
}

    `],
    providers: [{provide: AccordionConfig, useFactory: getAccordionConfig}]
})
export class AccordionDemoComponent {

public status: Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];

public oneAtATime: boolean = true;



public groups: any[] = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];
 
  public addItem(): void {
    this.items.push(`Items ${this.items.length + 1}`);
  }

public customClass: string = 'customClass';
  public isFirstOpen: boolean = true;

    ngOnInit():void{

    }


 }