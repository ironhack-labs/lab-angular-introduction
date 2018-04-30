import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title = "learn how to code with ironhack"
  image = "https://gcdn.emol.cl/fenomenos-paranormales/files/2016/09/infierno.jpg";
  description = "programar en ironhack es así de sencillo";

  constructor() { }

  ngOnInit() {
  }

}
