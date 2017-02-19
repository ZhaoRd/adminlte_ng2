
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
import { GeneralComponent } from './general.component';
import { IconComponent } from './icon.component';
import { ModalComponent } from './modal.component';

import { SliderComponent } from './slider.component';
import { TimelineComponent } from './timeline.component';

import { SortableDemoComponent } from './sortable.component';
import { ToastrDemoComponent } from './toastr.component';

export const UiElementRoutes = [
    
    { path: 'buttons',  component: ButtonsComponent },
    { path: 'general',  component: GeneralComponent },
    { path: 'icon',  component: IconComponent },
    { path: 'modal',  component: ModalComponent },
    { path: 'slider',  component: SliderComponent },
    { path: 'timeline',  component: TimelineComponent },
    { path: 'sortable',  component: SortableDemoComponent },
    { path: 'toastr',  component: ToastrDemoComponent },
    
];
