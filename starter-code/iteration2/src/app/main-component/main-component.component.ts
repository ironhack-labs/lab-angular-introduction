import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title: string = "Bad Bunny"
  img: string = "https://i1.wp.com/elblogurbano.com/wp-content/uploads/2017/11/chambea-bad-bunny-e1512078381840.jpg?fit=999%2C647&ssl=1";
  description: string = "Chambea Jala Cabrón ya no te quedan balas Chambea Jala Cabrón ya no te quedan bala Yo siempre picheo, enrolo otra vez Yo siempre picheo, enrolo otra vezYo siempre picheo, enrolo otra vezYo siempre picheo (Raaa)";

  constructor() { }

  ngOnInit() {
  }

}
