import { Component } from '@angular/core';
import { MenuItem } from './menu'

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent { 


    public menuItems:Array<MenuItem> = [
        new MenuItem("Dashboard","fa fa-dashboard","#",null,[
            new MenuItem("Dashboard v1","fa fa-circle-o","#","/dashboard/dashboard1",[]),
            new MenuItem("Dashboard v3","fa fa-circle-o","#","/dashboard/dashboard3",[])
        ]),
        new MenuItem("Charts","fa fa-pie-chart","#",null,[
            new MenuItem("ChartJS","fa fa-circle-o","#","/charts/chartjsdemo",[]),
            new MenuItem("EChart","fa fa-circle-o","#","/charts/echartdemo",[])
        ]),
        new MenuItem("UI Elements","fa fa-laptop","#",null,[
            new MenuItem("General","fa fa-circle-o","#","/general",[]),
            new MenuItem("Icons","fa fa-circle-o","#","/icons",[]),
            new MenuItem("Buttons","fa fa-circle-o","#","/buttons",[]),
            new MenuItem("Sliders","fa fa-circle-o","#","/sliders",[]),
            new MenuItem("Modals","fa fa-circle-o","#","/modals",[]),
        ]),
        new MenuItem("Forms","fa fa-edit","#",null,[
            new MenuItem("General Elements","fa fa-circle-o","#","/formGeneral",[]),
            new MenuItem("Advanced Elements","fa fa-circle-o","#","/formAdvanced",[]),
            new MenuItem("Editors","fa fa-circle-o","#","/formEditors",[])
        ]),
        new MenuItem("Tables","fa fa-table","#",null,[
            new MenuItem("Simple tables","fa fa-circle-o","#","/simpletables",[]),
            new MenuItem("Data tables","fa fa-circle-o","#","/datatables",[]),
            new MenuItem("UiGrid","fa fa-circle-o","#","/uigrid",[])
        ])
    ];


}
