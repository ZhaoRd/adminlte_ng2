import { Component, Inject } from '@angular/core';


//import { Chart,ChartConfiguration } from "chart.js"
import * as ChartJs from "chart.js"

//declare var Chart: any;
declare var $: any;


@Component({
    selector: 'dashboard2',
    templateUrl: './dashboard2.html'
})
export class Dashboard2Component {

    constructor() {

        console.log('ChartJs', ChartJs);
        //console.log('ChartConfiguration', );

    }

    private initChartJs(): void {

        var salesChartData: Chart.LinearChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    fill: true,
                    label: "Electronics",
                    backgroundColor: "rgb(210, 214, 222)",
                    borderColor: "rgb(210, 214, 222)",
                    pointBorderColor: "rgb(210, 214, 222)",
                    pointBackgroundColor: "#c1c7d1",
                    pointHoverBorderColor: "#fff",
                    pointHoverBackgroundColor: "rgb(220,220,220)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    fill: true,
                    label: "Digital Goods",
                    backgroundColor: "rgba(60,141,188,0.9)",
                    borderColor: "rgba(60,141,188,0.8)",
                    pointBorderColor: "#3b8bba",
                    pointBackgroundColor: "rgba(60,141,188,0.4)",
                    pointHoverBorderColor: "#fff",
                    pointHoverBackgroundColor: "rgba(60,141,188,0.4)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        var salesChartOptions: Chart.ChartOptions = {
            maintainAspectRatio: true,
            responsive: true
        };

        var salesChartCanvas = $("#salesChart");
        var salesChartConfig: Chart.ChartConfiguration = {
            type: "line",
            data: salesChartData,
            options: salesChartOptions
        };

        var salesChart = new ChartJs(salesChartCanvas, salesChartConfig);

        var pieData:Chart.ChartData = {
            labels: ["Chrome", "IE", "FireFox", "Safari", "Opera", "Navigator"],
            datasets: [{
                data: [700, 500, 400, 600, 300, 100],
                backgroundColor: ["#f56954", "#00a65a", "#f39c12", "#00c0ef", "#3c8dbc", "#d2d6de"],
                pointHoverBackgroundColor: ["#f56954", "#00a65a", "#f39c12", "#00c0ef", "#3c8dbc", "#d2d6de"]
            }]
        };

        var pieChartOptions: Chart.ChartOptions = {
            maintainAspectRatio: true,
            responsive: true
        };
        var pieChartCanvas = $("#pieChart");
        var pieChartConfig: Chart.ChartConfiguration = {
            type: "pie",
            data: pieData,
            options: pieChartOptions
        };

        var pieChart = new ChartJs(pieChartCanvas, pieChartConfig);

    }

    public ngOnInit() {
        this.initChartJs();
        this.initVectorMap();
        this.initSparkline();

    }

    private initSparkline(): void {

        //-----------------
        //- SPARKLINE BAR -
        //-----------------
        $('.sparkbar').each(function () {
            var $this = $(this);
            $this.sparkline('html', {
                type: 'bar',
                height: $this.data('height') ? $this.data('height') : '30',
                barColor: $this.data('color')
            });
        });

        //-----------------
        //- SPARKLINE PIE -
        //-----------------
        $('.sparkpie').each(function () {
            var $this = $(this);
            $this.sparkline('html', {
                type: 'pie',
                height: $this.data('height') ? $this.data('height') : '90',
                sliceColors: $this.data('color')
            });
        });

        //------------------
        //- SPARKLINE LINE -
        //------------------
        $('.sparkline').each(function () {
            var $this = $(this);
            $this.sparkline('html', {
                type: 'line',
                height: $this.data('height') ? $this.data('height') : '90',
                width: '100%',
                lineColor: $this.data('linecolor'),
                fillColor: $this.data('fillcolor'),
                spotColor: $this.data('spotcolor')
            });
        });


    }

    private initVectorMap(): void {


        /* jVector Maps
         * ------------
         * Create a world map with markers
         */
        $('#world-map-markers').vectorMap({
            map: 'world_mill_en',
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            backgroundColor: 'transparent',
            regionStyle: {
                initial: {
                    fill: 'rgba(210, 214, 222, 1)',
                    "fill-opacity": 1,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 1
                },
                hover: {
                    "fill-opacity": 0.7,
                    cursor: 'pointer'
                },
                selected: {
                    fill: 'yellow'
                },
                selectedHover: {}
            },
            markerStyle: {
                initial: {
                    fill: '#00a65a',
                    stroke: '#111'
                }
            },
            markers: [
                { latLng: [41.90, 12.45], name: 'Vatican City' },
                { latLng: [43.73, 7.41], name: 'Monaco' },
                { latLng: [-0.52, 166.93], name: 'Nauru' },
                { latLng: [-8.51, 179.21], name: 'Tuvalu' },
                { latLng: [43.93, 12.46], name: 'San Marino' },
                { latLng: [47.14, 9.52], name: 'Liechtenstein' },
                { latLng: [7.11, 171.06], name: 'Marshall Islands' },
                { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
                { latLng: [3.2, 73.22], name: 'Maldives' },
                { latLng: [35.88, 14.5], name: 'Malta' },
                { latLng: [12.05, -61.75], name: 'Grenada' },
                { latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
                { latLng: [13.16, -59.55], name: 'Barbados' },
                { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
                { latLng: [-4.61, 55.45], name: 'Seychelles' },
                { latLng: [7.35, 134.46], name: 'Palau' },
                { latLng: [42.5, 1.51], name: 'Andorra' },
                { latLng: [14.01, -60.98], name: 'Saint Lucia' },
                { latLng: [6.91, 158.18], name: 'Federated States of Micronesia' },
                { latLng: [1.3, 103.8], name: 'Singapore' },
                { latLng: [1.46, 173.03], name: 'Kiribati' },
                { latLng: [-21.13, -175.2], name: 'Tonga' },
                { latLng: [15.3, -61.38], name: 'Dominica' },
                { latLng: [-20.2, 57.5], name: 'Mauritius' },
                { latLng: [26.02, 50.55], name: 'Bahrain' },
                { latLng: [0.33, 6.73], name: 'São Tomé and Príncipe' }
            ]
        });

    }

}
