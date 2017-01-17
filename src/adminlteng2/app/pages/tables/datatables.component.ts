import { Component } from '@angular/core';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'datatables',
    templateUrl: `datatables.html`
})
export class DataTablesComponent {

    dt2Option:Object;

    ngOnInit():void{
      //  $("#example1").DataTable();
      this.dt2Option={
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false
    };
    //$('#example2').DataTable();
    }

 }