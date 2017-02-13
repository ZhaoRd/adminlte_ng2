export class MenuItem {
    name: string = '';
    icon: string = '';
    route: string = '';
    displayName:string="";
    items: MenuItem[];

    constructor(name: string,displayName: string,  icon: string, route: string, items?: MenuItem[]) {
        this.name = name;
        this.icon = icon;
        this.route = route;
        this.displayName=displayName;

        if (items === undefined) {
            this.items = [];    
        } else {
            this.items = items;
        }        
    }
}