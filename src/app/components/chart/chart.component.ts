import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';
import Chart from 'chart.js';


@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {

  id;

  user;

  info;


  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {

      this.id = params['id'];

      

      this.cargarChart();

    });


    

  }

  random_rgba() {
      var o = Math.round, r = Math.random, s = 255;
      return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }



  cargarChart(){


    let tipo

    switch(this.id) {
      case "1":
        tipo = 'line';
        break;
      case "2":
        tipo = 'bar';
        break;
      case "3":
        tipo = 'pie';
        break;
      case "4":
      case "6":
        tipo = 'polarArea';
        break;
      case "5":
        tipo = 'doughnut';
        break;
    }

    let colores = [this.random_rgba(),this.random_rgba(),this.random_rgba(),this.random_rgba()]


    var ctx2= document.getElementById('myChart')as HTMLCanvasElement;
    var ctx = ctx2.getContext('2d');
    var myChart = new Chart(ctx, {
        type: tipo,
        data: {
            labels: ['Argentina', 'Brasil', 'Uruguay', 'Chile'],
            datasets: [{
                data: [20, 10, 4, 2],
                backgroundColor: colores,
                borderColor: colores,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


  }







  misGraficas(event){
    this.router.navigate(['/misGraficas']);
  }

  home(event){
    this.router.navigate(['/home']);
  }

  login(event){
    this.router.navigate(['/login']);
  }

  cerrarSesion(event){

  }

}