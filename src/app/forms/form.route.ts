
import { Routes, RouterModule } from '@angular/router';


import { FormGenralComponent } from './general.component';
import { FormAdvancedComponent } from './advanced.component';
import { FormEditorComponent } from './editor.component';

export const FormRoutes = [
    { path: 'formGeneral',  component: FormGenralComponent },
    { path: 'formAdvanced',  component: FormAdvancedComponent },
    { path: 'formEditors',  component: FormEditorComponent }
];
