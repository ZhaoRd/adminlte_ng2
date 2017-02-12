export class MenuItem{

    public display:string="";
    public icon:string=null;
    //public isOpend:
    public isExpand:boolean=false;
    public href:string="";
    public routerLink:string="";

    public items:Array<MenuItem>=[]
  
    constructor(display:string,icon:string,href:string,routerLink:string,items:Array<MenuItem>){

        this.display=display;
        this.icon=icon;
        this.href=href;
        this.routerLink=routerLink;
        this.items=items;

    }

    public  iconIsNull():boolean{
        return this.icon==null;
    }

    public childrenIsEmpty():boolean{
        return this.items.length==0;
    }

    public expand():void{
        this.isExpand=!this.isExpand;
    }

}