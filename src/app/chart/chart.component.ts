import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {DataService} from "./data.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options; // required
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  constructor(dataService: DataService) {
    this.chartOptions = {
      series: [
        {
          type: "line",
          data: dataService.getData()
        },
        {
          type: "line",
          data: dataService.getData2()
        }
      ]
    }
  }

  ngOnInit(): void {
  }
}
