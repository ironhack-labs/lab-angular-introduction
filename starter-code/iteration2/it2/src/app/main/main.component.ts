import { Component, OnInit } from '@angular/core';
import { CommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title1:string
  image1:string
  comment1:string
  constructor() { 
    this.title1='Hola esto es lo primero';
    this.image1='https://www.eldiario.es/fotos/Massiel-actuacion-Eurovision_EDIIMA20180810_0225_19.jpg';
    this.comment1='holaholaholaholahoalh akaka akaka ajaja ajaha'
  }

  ngOnInit() {
  }

}
