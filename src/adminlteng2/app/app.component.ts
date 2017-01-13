import { Component,Inject,OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { AppConfig }  from './app.config';

declare var $:any;

@Component({
    selector: 'body',
    templateUrl: `app/app.html`,
    host:{
      '[class.sidebar-collapse]':"!appConfig.sidebarIsOpen",
      '[class.fixed]':"appConfig.layout.isFixed"
    }
})
export class AppComponent extends OnInit { 
    appConfig:AppConfig;

    private _titleService:Title;

    constructor(titleService: Title){
        super();
        this._titleService=titleService;
        this.InitAppConfig();
    }

    private InitAppConfig(){
        this.appConfig=AppConfig.getAppInfo();
        this._titleService.setTitle(this.appConfig.name);
    }

    ngOnInit(): void {
        console.log('Component 初始化');
        this.initMenuTree('.sidebar');
        this.activate();

    }

    /**
     * 初始化 菜单插件
     */
    private initMenuTree(menu:any){
        var self=this;
        
        //var _this = this;

    var animationSpeed =500;// $.AdminLTE.options.animationSpeed;

    
    $(document).off('click', menu + ' li a')
      .on('click', menu + ' li a', function (e:any) {
        //Get the clicked link and the next element
        var $this = $(this);
        var checkElement = $this.next();

        //Check if the next element is a menu and is visible
        if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible')) && (!$('body').hasClass('sidebar-collapse'))) {
          //Close the menu
          checkElement.slideUp(animationSpeed, function () {
            checkElement.removeClass('menu-open');
            //Fix the layout in case the sidebar stretches over the height of the window
            //_this.layout.fix();
          });
          checkElement.parent("li").removeClass("active");
        }
        //If the menu is not visible
        else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
          //Get the parent menu
          var parent = $this.parents('ul').first();
          //Close all open menus within the parent
          var ul = parent.find('ul:visible').slideUp(animationSpeed);
          //Remove the menu-open class from the parent
          ul.removeClass('menu-open');
          //Get the parent li
          var parent_li = $this.parent("li");

          //Open the target menu and add the menu-open class
          checkElement.slideDown(animationSpeed, function () {
            //Add the class active to the parent li
            checkElement.addClass('menu-open');
            parent.find('li.active').removeClass('active');
            parent_li.addClass('active');

                self.fix();
            //this.fix();
            //Fix the layout in case the sidebar stretches over the height of the window
            //_this.layout.fix();
          });
        }
        //if this isn't a link, prevent the page from being redirected
        if (checkElement.is('.treeview-menu')) {
          e.preventDefault();
        }
      });

    }


    private activate():void {
      this.fix();
      this.fixSidebar();
      $(window, ".wrapper").resize(function () {
        this.fix();
        this.fixSidebar();
      });
    }

    private fix():void{


      //Get window height and the wrapper height
      var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
      var window_height = $(window).height();
      var sidebar_height = $(".sidebar").height();
      //Set the min-height of the content and sidebar based on the
      //the height of the document.
      if (this.appConfig.layout.isFixed) {
        $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
      } else {
        var postSetWidth:number;
        if (window_height >= sidebar_height) {
          $(".content-wrapper, .right-side").css('min-height', window_height - neg);
          postSetWidth = window_height - neg;
        } else {
          $(".content-wrapper, .right-side").css('min-height', sidebar_height);
          postSetWidth = sidebar_height;
        }

        //Fix for the control sidebar height
        var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
        if (typeof controlSidebar !== "undefined") {
          if (controlSidebar.height() > postSetWidth)
            $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
        }

      }
   

    }

    private fixSidebar():void{
        
        if(!this.appConfig.layout.isFixed){
            if(typeof $.fn.slimScroll != 'undefined'){
                $(".sidebar").slimScroll({ destroy: true }).height("auto");
            }
            return;
        }

        if (typeof $.fn.slimScroll != 'undefined') {
            //Destroy if it exists
            $(".sidebar").slimScroll({ destroy: true }).height("auto");
            //Add slimscroll
            var slimScroll = $(".sidebar").slimscroll({
                height: ($(window).height() - $(".main-header").height()) + "px",
                color: "rgba(0,0,0,0.2)",
                size: "3px"
            });
            /*

            slimScroll.css('overflow','visible');
            $('.slimScrollDiv').css('overflow','visible');
*/
        }

    }

}
