import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  userSession="";

  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {

    $("#close").hide();
    $("#login").hide();


    if(this.userSession != ""){
        $("#close").show();
    }else{
        $("#login").show();
    }

  }

  cerrarSesion(event){

    $("#close").hide();
    $("#login").show();

  }

  login(event){
    this.router.navigate(['/login']);
  }

  misGraficas(event){
    this.router.navigate(['/misGraficas']);
  }


}