// Vasilina Khvostikova
// 2024-10-28
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common'; 
import { ChartType, ChartData, ChartOptions } from 'chart.js';
import { MatDialog } from '@angular/material/dialog';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; 
import { MatIconModule } from '@angular/material/icon';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// webservise for file
@Injectable({
  providedIn: 'root'
})
export class WebService {
  private jsonUrl = '/program-languages.json';
  constructor(private http: HttpClient) {}

  loadLanguagesData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BaseChartDirective, CommonModule, MatDialogModule, MatIconModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment2-khvostiv';
  chartType: ChartType = 'bar'; // default chart type
  languages: any[] = [];

  constructor(private webService: WebService, public dialog: MatDialog) {}

  openAboutDialog(): void {
    this.dialog.open(AboutDialogComponent);
  }

  // method to update the chart type dynamically
  updateChartType(type: ChartType): void {
    this.chartType = type;
  }

  // chart properties (bonus)
  chartData: ChartData<'bar' | 'pie'> = {
    labels: [],
    datasets: [{
      label: 'Percent',
      data: [],
      backgroundColor: [
        '#E1BEE7', // 1
        '#CE93D8', // 2
        '#BA68C8', // 3
        '#AB47BC', // 4
        '#9C27B0', // 5
        '#8E24AA', // 6
        '#7B1FA2', // 7
        '#6A1B9A', // 8
        '#4A148C', // 9
        '#EA80FC', // 10
        '#D500F9', // 11
        '#AA00FF', // 12
        '#8C9EFF', // 13
        '#536DFE', // 14
        '#3D5AFE', // 15
        '#304FFE', // 16
        '#B388FF', // 17
        '#7C4DFF', // 18
        '#651FFF'  // 19
    ],
      borderColor: '#333', 
      borderWidth: 1
    }]
  };
  
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Top Programming Languages",
        font: { size: 24 },
        color: '#333'
      },
      legend: {
        display: true,
        position: "bottom",
        labels: { color: "#333" }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { color: '#333', font: { size: 12 } }
      },
      y: {
        ticks: { color: '#333', font: { size: 12 } }
      }
    }
  };

  ngOnInit() {
    this.loadChartData();
  }

  loadChartData() {
    this.webService.loadLanguagesData().subscribe(
      data => {
        this.languages = data;
        this.chartData.labels = data.map(item => item.language);
        this.chartData.datasets[0].data = data.map(item => item.percent);
      },
      error => {
        console.error("Error loading JSON data", error);
      }
    );
  }
}
