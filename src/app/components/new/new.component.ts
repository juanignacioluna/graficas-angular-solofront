import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';
import Chart from 'chart.js';


@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.less']
})
export class NewComponent implements OnInit {

  cantidad=false;

  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {

  }



  add(event){

    this.router.navigate(['/misGraficas'])

  }

  cerrarSesion(event){

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

}