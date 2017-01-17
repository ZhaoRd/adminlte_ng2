import { Component } from '@angular/core';

declare var $:any;
declare var CKEDITOR:any;

@Component({
    moduleId:module.id,
    selector: 'form-editors',
    templateUrl: `editors.html`
})
export class FormEditorsComponent {

    ngOnInit():void{

 // Replace the <textarea id="editor1"> with a CKEditor
    // instance, using default configuration.
    CKEDITOR.replace('editor1');
    //bootstrap WYSIHTML5 - text editor
    $(".textarea").wysihtml5();


    }

 }