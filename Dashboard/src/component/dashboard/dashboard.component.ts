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

}
