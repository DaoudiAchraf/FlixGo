import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartsService } from '../charts.service'

@Component({
  selector: 'app-analytic-child-categ',
  templateUrl: './analytic-child-categ.component.html',
  styleUrls: ['./analytic-child-categ.component.css']
})
export class AnalyticChildCategComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend: {
      display: false
   }
  };
  public radarChartLabels: Label[]

  public radarChartData: ChartDataSets[] = [
    { data: [] }
  ];

  public radarChartType: ChartType = 'radar';
  public radarChartLegend = false;

  show = false;

  constructor(private ChartsService:ChartsService) { }

  ngOnInit(): void {
    console.log("hiiiiiii");
    this.ChartsService.getMostRated().subscribe((res:any)=>{
      let movieName = [];
      let movieRate = [];

      res.forEach(element => {


         const Rate = Math.round((element.Rate + Number.EPSILON) * 100) / 100 ;
         if (Rate>0)
         {
          movieName.push(element.movie);
          movieRate.push(Rate);
         }

      });


      //this.radarChartData =




      this.radarChartLabels= movieName;
      this.radarChartData = [{data : movieRate}];

      console.log("n",movieName);
      console.log("n",movieRate);
      console.log(this.show);

      // console.log(res);
    });


  }



}
