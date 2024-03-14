import { Component } from '@angular/core';

import * as signalr from "@microsoft/signalr";

import * as Highcharts from "highcharts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  connection : signalR.HubConnection; 
  constructor() {
    this.connection = new signalr.HubConnectionBuilder().withUrl("https://localhost:7172/charthub").build();      
    this.connection.start();

    this.connection.on("receiveMessage", message => {
      alert(message);
    });
  }
  Highcharts : typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text : "Başlık"
    },
    subtitle :{
      text : "Alt Başlık"
    },
    yAxis : {
      title : {
        text : "Y Ekseni"
      }
    },
    xAxis : {
      accessibility : {
        rangeDescription: "2020-2024"
      }
    },
    legend : {
      layout : "vertical",
      align : "right",
      verticalAlign : "middle"
    },
    series : [
      {
        name : "X",
        data : [1000, 2000, 3000],
        type: "line"
      },
      {
        name : "Y",
        data : [5000, 3000, 2000],
        type: "line"
      },
      {
        name : "Z",
        data : [815, 548, 1450],
        type: "line"
      }
    ],
    plotOptions : {
      series: {
        label : {
          connectorAllowed : true
        },
        pointStart : 100
      }
    }
  }
}
