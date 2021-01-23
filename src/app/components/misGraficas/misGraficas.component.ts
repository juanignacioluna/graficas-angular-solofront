import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';

@Component({
    selector: 'app-misGraficas',
    templateUrl: './misGraficas.component.html',
    styleUrls: ['./misGraficas.component.less']
})
export class MisGraficasComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {

          $(".cards").append( `<style>

            .cards{
              text-align: center;
            }

            .cards a{
              text-decoration: none;
            }

            .card{
              color: black;
              margin-bottom: 20px;
              margin-right: 20px;
              padding: 10px;
              display: inline-block;
              min-width: 300px;
              max-width: 250px;
              text-align: center;
              border: 1px solid transparent;
              border-color: #323232;
              border-radius: 2.5px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
              cursor: pointer;
            }


            @media screen and (max-width: 730px){

              .card{

                display: block;
                min-width: inherit;
                max-width: inherit;

              }
      
          
            }
    
          
          </style>` );

  }

  home(event){
    this.router.navigate(['/home']);
  }

  chart(event){
    this.router.navigate(['/chart']);
  }

  new(event){
    this.router.navigate(['/new']);
  }

  login(event){
    this.router.navigate(['/login']);
  }

  cerrarSesion(event){


  }


}