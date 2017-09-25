import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    url : string = 'https://pbs.twimg.com/profile_images/3566889919/04fd8c9297d579eba3d89e042bab5ca7_400x400.jpeg';
    description: string = 'con Mr Ardilla aprenderas mogollon! Pregunta lo que quieras y te contestara lo antes posible. CON UN PAR DE BELLOTAS. ';




  constructor() { }

  ngOnInit() {
  }

}
