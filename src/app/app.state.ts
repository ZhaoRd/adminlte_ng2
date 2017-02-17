import { OpaqueToken } from '@angular/core';

export class AppState {
    public name:string="AdminLTE Angular2";

    public version:string="1.5.0";
   
    public year:number=0;

    constructor(){

        if(AppState._instance!=null){
            throw Error('AppState 已单例使用');
        }

        this.year=new Date().getFullYear();
    }
    
private static _instance:AppState = null;

public static  getInstance():AppState {
    console.log('getInstance');
    if(!AppState._instance) {
	    AppState._instance = new AppState();
    }
 
    return AppState._instance;
}


}

export const APPSTATE = new OpaqueToken('AppState');

export function runnersAppStateFactory() {
  return AppState.getInstance();
};
