import { MenuItem } from './menu-item';

export class Menu {
    name: string = '';
    displayName: string = '';
    items: MenuItem[];

    constructor(name: string, displayName: string, items: MenuItem[]) {
        this.name = name;
        this.displayName = displayName;
        this.items = items;
    }
}
