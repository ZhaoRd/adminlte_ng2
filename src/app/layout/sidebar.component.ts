import { Component } from '@angular/core';


import { Menu } from './menu'
import { MenuItem } from './menu-item'

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent { 


    menu: Menu = new Menu("MainMenu", "主要导航", [
        new MenuItem("dashboard","工作台","fa fa-dashboard","",[
            new MenuItem("dashboard1", "工作台V1", "fa fa-circle-o", "/dashboard/dashboard1"),
            new MenuItem("dashboard2", "工作台V2", "fa fa-circle-o", "/dashboard/dashboard2"),
        ]),
        new MenuItem("layoutoption","布局选项","fa fa-files-o","",[
            new MenuItem("topnav", "Top Navigation", "fa fa-circle-o", "/layout/topnav"),
            new MenuItem("boxed", "Boxed", "fa fa-circle-o", "/layout/boxed"),
            new MenuItem("fixed", "Fixed", "fa fa-circle-o", "/layout/fixed"),
            new MenuItem("collapsed", "Collapsed Sidebar", "fa fa-circle-o", "/layout/collapsed"),
        ]),
        new MenuItem("widget","小工具","fa fa-th","/widget",[]),
        new MenuItem("charts","图表","fa fa-pie-chart","",[
            new MenuItem("chartjs", "ChartJS", "fa fa-circle-o", "/charts/chartjs"),
            new MenuItem("morris", "Morris", "fa fa-circle-o", "/charts/morris"),
            //new MenuItem("flot", "Flot", "fa fa-circle-o", "/charts/flot"),
            new MenuItem("inlinechart", "Inline charts", "fa fa-circle-o", "/charts/inlinechart"),
            new MenuItem("echarts", "ECharts", "fa fa-circle-o", "/charts/echart"),
        ]),
        new MenuItem("ui","界面元素","fa fa-laptop","",[
            new MenuItem("general", "General", "fa fa-circle-o", "/ui/general"),
            new MenuItem("icons", "Icons", "fa fa-circle-o", "/ui/icon"),
            new MenuItem("buttons", "Buttons", "fa fa-circle-o", "/ui/buttons"),
            new MenuItem("sliders", "Sliders", "fa fa-circle-o", "/ui/slider"),
            new MenuItem("timeline", "Timeline", "fa fa-circle-o", "/ui/timeline"),
            new MenuItem("modals", "Modals", "fa fa-circle-o", "/ui/modal"),
        ]),
        new MenuItem("forms","表单","fa fa-edit","",[
            new MenuItem("formGeneral", "General Elements", "fa fa-circle-o", "/forms/formGeneral"),
            new MenuItem("formAdvanced", "Advanced Elements", "fa fa-circle-o", "/forms/formAdvanced"),
            new MenuItem("formEditors", "Editors", "fa fa-circle-o", "/forms/formEditors")
        ]),
        new MenuItem("tables","表格","fa fa-table","",[
            new MenuItem("simpletables", "Simple tables", "fa fa-circle-o", "/tables/simpletables"),
            new MenuItem("datatables", "Data tables", "fa fa-circle-o", "/tables/datatables")
        ]),
        new MenuItem("calendar","日历","fa fa-calendar","/calendarindex",[]),
        new MenuItem("example","实例","fa fa-folder","",[
            new MenuItem("invoice", "账单", "fa fa-circle-o", "/example/invoice"),
            new MenuItem("profile", "个人资料", "fa fa-circle-o", "/example/profile"),
            new MenuItem("login", "登录", "fa fa-circle-o", "/example/login"),
            new MenuItem("register", "注册", "fa fa-circle-o", "/example/register"),
            new MenuItem("lockscreen", "锁屏", "fa fa-circle-o", "/example/lockscreen"),
            new MenuItem("error404", "404 错误", "fa fa-circle-o", "/example/error404"),
            new MenuItem("error500", "500 错误", "fa fa-circle-o", "/example/error500"),
            new MenuItem("blank", "空白页", "fa fa-circle-o", "/example/blank"),
        ])
    ]);


     showMenuItem(menuItem): boolean {
        if (menuItem.permissionName) {
            //return this.permission.isGranted(menuItem.permissionName);
        }

        if (menuItem.items && menuItem.items.length) {
            //return this.checkChildMenuItemPermission(menuItem);
        }

        return true;
    }


/*
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
*/

}
