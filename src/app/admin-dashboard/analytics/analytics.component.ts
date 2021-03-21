import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ChartsService } from './charts.service';
import { ThrowStmt } from '@angular/compiler';
import { element } from 'protractor';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {


  accountsCharts:boolean = false ;

//----------------------
public barChartOptions: ChartOptions = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: { xAxes: [{}], yAxes: [{}] },
  plugins: {
    datalabels: {
      anchor: 'end',
      align: 'end',
    }
  }
};
public barChartLabels: Label[] = [];
public barChartType: ChartType = 'bar';
public barChartLegend = false;
public barChartPlugins = [pluginDataLabels];

public barChartData: ChartDataSets[]=[{}];

//----------------

constructor(private chartsService:ChartsService) { }

ngOnInit(): void {
   this.chartsService.ReservsPerfilm().subscribe((res:any)=>
   {  //this.barChartLabels = res.map(element => element._id);
     // this.barChartData = res.map(element => element.count);
      this.accountsCharts = true;
       console.log(res);
       console.log(res.map(({_id}) => ({data:_id}) ));
       this.barChartLabels = res.map( element => element._id );
       console.log(res.map( ({count}) => ({data:count}) ));
       this.barChartData = res.map( ({count}) => ({data:count}) );
  });

}

}
