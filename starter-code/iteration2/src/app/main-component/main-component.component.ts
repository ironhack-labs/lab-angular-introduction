import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  title = 'Learn to code in Ironhack';
    image = 'http://endesavehiculoelectrico.com/wp-content/uploads/2017/08/madrid.jpg';
    description = 'Lorem fistrum torpedo me cago en tus muelas llevame al sircoo amatomaa por la gloria de mi madre a gramenawer ahorarr. Tiene musho peligro benemeritaar'

  constructor() { }

  ngOnInit() {
  }

}
