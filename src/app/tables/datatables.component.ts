import { Component,Inject } from '@angular/core';

declare var $: any;

@Component({
    selector: 'table-datatables',
    templateUrl: './datatables.component.html'
})
export class DatatableComponent { 
    
    constructor() { 

        
    }

    public ngOnInit() {

         $("#example1").DataTable();
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false
    });
    }

}
