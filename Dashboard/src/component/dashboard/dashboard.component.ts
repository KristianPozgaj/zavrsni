import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'dashboard',
  templateUrl: '././dashboard.component.html',
  styleUrls: ['././dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  imports: [ NgxChartsModule ]
  constructor() { }

  view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Number';
    showYAxisLabel = true;
    yAxisLabel = 'Color Value';
    timeline = true;
  
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    }; 
  
  ngOnInit() {  
  }
  multi: any[] = [
		{
			name: 'Cyan',
			series: [
				{
					name: 5,
					value: 2650
				},
				{
					name: 10,
					value: 2800
				},
				{
					name: 15,
					value: 2000
				}
			]
		},
		{
			name: 'Yellow',
			series: [
				{
					name: 5,
					value: 2500
				},
				{
					name: 10,
					value: 3100
				},
				{
					name: 15,
					value: 2350
				}
			]
		}
	];

}
