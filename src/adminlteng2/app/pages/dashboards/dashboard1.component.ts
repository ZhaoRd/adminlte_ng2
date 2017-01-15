import { Component,OnInit } from '@angular/core';
//import 'echarts';
//var echarts = require('echarts');

const echarts = require('echarts');

//declare var echarts:any;
declare var $:any;
declare var moment:any;
declare var Morris:any;

@Component({
    moduleId:module.id,
    selector: 'dashboard1',
    templateUrl: `dashboard1.html`
})
export class DashboardComponent  extends OnInit {

    scrollHeight:string="250px";

    ngOnInit(): void {
        this.initSalesChart();
        this.initWorldMap();
        this.initDateRange();
        this.initSparklineCharts();
        this.initKnobAndCalendar();
        this.initElement();
        this.initTodoList();
        this.initEchart();
    }

    private initKnobAndCalendar():void{

    }
    echartOpt:Object;
    private initEchart():void{


        // 指定图表的配置项和数据
        this.echartOpt = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };


      /*
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart_main'));

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        */
    }

    sparkline1:Object;
    sparkline2:Object;
    sparkline3:Object;

    private initSparklineCharts():void{
        var opt={
type: 'line',
          lineColor: '#92c1dc',
          fillColor: "#ebf4f9",
          height: '50',
          width: '80'
        };
      this.sparkline1={
        values:[1000, 1200, 920, 927, 931, 1027, 819, 930, 1021],
        options:opt
      };

this.sparkline2={
        values:[515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921],
        options:opt
      };

      this.sparkline3={
        values:[15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21],
        options:opt
      };


    }

    private initDateRange():void{

      /*
          $('.daterange').daterangepicker({
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment()
  }, function (start:any, end:any) {
    window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  });
*/

    }

    salesArea:Object;
    salesDonut:Object;

    private showSalesArea():void{

      
      this.salesArea = {
    title: {
        text: 'Sales'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['Item 1','Item 2']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2011 Q1','2011 Q2','2011 Q3','2011 Q3',
            '2012 Q1','2012 Q2','2012 Q3']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Item 1',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[2666, 2778, 4912, 3767, 6810, 5670, 4820]
        },
        {
            name:'Item 2',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[2666, 2294, 1969, 3597, 1914, 4293, 3795]
        }
    ]
};

    }

    private showSalesDonut():void{



this.salesDonut={
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};

    }

    private initSalesChart():void{



      // Sales chart
      
  var area = new Morris.Area({
    element: 'revenue-chart',
    resize: true,
    data: [
      {y: '2011 Q1', item1: 2666, item2: 2666},
      {y: '2011 Q2', item1: 2778, item2: 2294},
      {y: '2011 Q3', item1: 4912, item2: 1969},
      {y: '2011 Q4', item1: 3767, item2: 3597},
      {y: '2012 Q1', item1: 6810, item2: 1914},
      {y: '2012 Q2', item1: 5670, item2: 4293},
      {y: '2012 Q3', item1: 4820, item2: 3795},
      {y: '2012 Q4', item1: 15073, item2: 5967},
      {y: '2013 Q1', item1: 10687, item2: 4460},
      {y: '2013 Q2', item1: 8432, item2: 5713}
    ],
    xkey: 'y',
    ykeys: ['item1', 'item2'],
    labels: ['Item 1', 'Item 2'],
    lineColors: ['#a0d0e0', '#3c8dbc'],
    hideHover: 'auto'
  });



  var line = new Morris.Line({
    element: 'line-chart',
    resize: true,
    data: [
      {y: '2011 Q1', item1: 2666},
      {y: '2011 Q2', item1: 2778},
      {y: '2011 Q3', item1: 4912},
      {y: '2011 Q4', item1: 3767},
      {y: '2012 Q1', item1: 6810},
      {y: '2012 Q2', item1: 5670},
      {y: '2012 Q3', item1: 4820},
      {y: '2012 Q4', item1: 15073},
      {y: '2013 Q1', item1: 10687},
      {y: '2013 Q2', item1: 8432}
    ],
    xkey: 'y',
    ykeys: ['item1'],
    labels: ['Item 1'],
    lineColors: ['#efefef'],
    lineWidth: 2,
    hideHover: 'auto',
    gridTextColor: "#fff",
    gridStrokeWidth: 0.4,
    pointSize: 4,
    pointStrokeColors: ["#efefef"],
    gridLineColor: "#efefef",
    gridTextFamily: "Open Sans",
    gridTextSize: 10
  });
/**/




  //Donut Chart
  var donut = new Morris.Donut({
    element: 'sales-chart',
    resize: true,
    colors: ["#3c8dbc", "#f56954", "#00a65a"],
    data: [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ],
    hideHover: 'auto'
  });
 /* */

  //Fix for charts under tabs
  $('.nav-tabs-custom ul.nav a').on('shown.bs.tab', function () {
    area.redraw();
   donut.redraw();
   line.redraw();
   /*
   console.log('shown.bs.tab');
    _self.showSalesArea();
    _self.showSalesDonut();
     */ 
  });


    }

    worldMap:Object;
    
    private initWorldMap():void{


  //jvectormap data
  var visitorsData = {
    "US": 398, //USA
    "SA": 400, //Saudi Arabia
    "CA": 1000, //Canada
    "DE": 500, //Germany
    "FR": 760, //France
    "CN": 300, //China
    "AU": 700, //Australia
    "BR": 600, //Brazil
    "IN": 800, //India
    "GB": 320, //Great Britain
    "RU": 3000 //Russia
  };

  this.worldMap={
    map: 'world_mill_en',
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: '#e4e4e4',
        "fill-opacity": 1,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 1
      }
    },
    series: {
      regions: [{
        values: visitorsData,
        scale: ["#92c1dc", "#ebf4f9"],
        normalizeFunction: 'polynomial'
      }]
    },
    onRegionLabelShow: function (e:any, el:any, code:any) {
      if (typeof visitorsData[code] != "undefined")
        el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
    }
  }
  
    }

  
  private initTodoList():void{

/*
  //jQuery UI sortable for the todo list
  $(".todo-list").sortable({
    placeholder: "sort-highlight",
    handle: ".handle",
    forcePlaceholderSize: true,
    zIndex: 999999
  });
*/
/*
  $(".todo-list").todolist({
    onCheck: function (ele:any) {
    //  window.console.log("The element has been checked");
      return ele;
    },
    onUncheck: function (ele:any) {
      //window.console.log("The element has been unchecked");
      return ele;
    }
  });
*/

  }
sortableOpt:Object;
    private initElement():void{
        
        this.sortableOpt={
    placeholder: "sort-highlight",
    connectWith: ".connectedSortable",
    handle: ".box-header, .nav-tabs",
    forcePlaceholderSize: true,
    zIndex: 999999
  };
  //Make the dashboard widgets sortable Using jquery UI
//  $(".connectedSortable").sortable();

  /*
  $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");
*/

    }

 }
