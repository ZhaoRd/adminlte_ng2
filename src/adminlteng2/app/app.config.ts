

declare var $:any;


export class Layout{
    isFixed:boolean=true;

    constructor(){
        this.isFixed=true;
    }

    public fixSidebar(){
        
    }

}

export class AppConfig{
  name:string;
  year:number;
  version:string;
  sidebarIsOpen:boolean=true;
  layout:Layout=new Layout();

  public constructor(){
      
  }

  

  public sidebar(){
      this.sidebarIsOpen=!this.sidebarIsOpen;

  }




  public static _instance:AppConfig=null;

  public static getAppInfo():AppConfig{
      if(AppConfig._instance!=null){
          return AppConfig._instance;
      }

      AppConfig._instance=new AppConfig();
      AppConfig._instance.name="AdminLTE-AngularJs2";
      AppConfig._instance.version="0.0.3";
      AppConfig._instance.year=new Date().getFullYear();
      return AppConfig._instance;
  }

}