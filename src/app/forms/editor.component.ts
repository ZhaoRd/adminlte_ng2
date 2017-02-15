import { Component,Inject } from '@angular/core';

declare var $: any;
declare var CKEDITOR: any;


@Component({
    selector: 'form-editor',
    templateUrl: './editor.component.html'
})
export class FormEditorComponent { 
    
    constructor() { 

        
    }

    public ngOnInit() {

        // Replace the <textarea id="editor1"> with a CKEditor
    // instance, using default configuration.
    CKEDITOR.replace('editor1');
    //bootstrap WYSIHTML5 - text editor
    $(".textarea").wysihtml5();
    }

}
