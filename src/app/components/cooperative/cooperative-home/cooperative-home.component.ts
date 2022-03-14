import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

const CHART_PADDING = 30;

@Component({
  selector: 'app-cooperative-home',
  templateUrl: './cooperative-home.component.html',
  styleUrls: ['./cooperative-home.component.css']
})
export class CooperativeHomeComponent implements OnInit {

  cards = [
    'Aporte por persona',
    'Carreras este mes',
    'Dias trabajados'
  ]

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    layout:{
      padding: CHART_PADDING,
    },
    plugins: {
      legend: {
        position: 'bottom',
        display: false,
      }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: ['Ana', 'Juan', 'Pedro '],
    datasets: [
      {
        data: [210, 250, 300],
        label: 'Carreras por mes'
      },
    ]
  };

  //pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    layout:{
      padding: CHART_PADDING,
    },
    plugins: {
      legend: {
        display: true,
        position: 'left',
      },
    }
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Ana', 'Juan', 'Pedro'],
    datasets: [{
      data: [210, 250, 300]
    }]
  };
  public pieChartType: ChartType = 'pie';


  constructor() { }

  ngOnInit(): void {
  }

}
