import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ChartsService } from '../charts.service';

@Component({
  selector: 'app-analytic-child',
  templateUrl: './analytic-child.component.html',
  styleUrls: ['./analytic-child.component.css']
})
export class AnalyticChildComponent implements OnInit {

  accountsCharts:boolean = false ;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['Visitors', 'Producers', 'Moderators'];
  public pieChartData: number[] =[300,500,200];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor(private chartsService:ChartsService) { }

  ngOnInit() {
    this.chartsService.AccountsNumber().subscribe((res:any)=>
     { console.log(res.Visitors);


      this.pieChartData = [res.Visitors,res.Producers,res.Moderators]

    });
  }





}
