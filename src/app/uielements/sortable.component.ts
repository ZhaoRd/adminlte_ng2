import { Component, Inject } from '@angular/core';

@Component({
    selector: 'ui-sortable',
    templateUrl: './sortable.component.html'
})
export class SortableDemoComponent {

    public itemStringsLeft: any[] = [
        'Windstorm',
        'Bombasto',
        'Magneta',
        'Tornado'
    ];

    public itemStringsRight: any[] = [
        'Mr. O',
        'Tomato'
    ];

    constructor() {


    }

    public ngOnInit() {


    }

}