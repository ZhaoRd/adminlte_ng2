import { Component,HostListener,ElementRef,Renderer,Inject} from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from 'ng2-translate';


import { Title }     from '@angular/platform-browser';


import { APPSTATE,AppState } from './app.state';


import 'rxjs/add/operator/merge';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
	private globalClickCallbackFn: Function;
	private loginSuccessCallbackFn: Function;

	constructor(
		public elementRef: ElementRef, 
		public renderer: Renderer,
		public router: Router,
        public activatedRoute: ActivatedRoute,
		public translate: TranslateService,
		@Inject(APPSTATE) public appState: AppState,
		private titleService: Title 
	) {

			this.titleService.setTitle( appState.name );

	}

	ngOnInit() {
		/*
	    this.globalClickCallbackFn=this.renderer.listen(this.elementRef.nativeElement, 'click', (event:any) => {
	    	console.log("全局监听点击事件>"+event);
	    });
	    */
	
        this.translate.addLangs(["zh", "en"]);
        this.translate.setDefaultLang('zh');

        const browserLang = this.translate.getBrowserLang();
        console.log("检测到的浏览器语言>"+browserLang);
        this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');

		$().ready(function(){
            console.log('测试');
        });


    }

    ngOnDestroy(){
    	if(this.globalClickCallbackFn){
    		this.globalClickCallbackFn();
    	}
    }

	toggle(button:any){
		console.log(button);
	}

	public doLogout():void{
		
		this.router.navigateByUrl("");
	}
}