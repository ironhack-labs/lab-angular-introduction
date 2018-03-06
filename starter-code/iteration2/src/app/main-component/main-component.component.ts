import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  main: <Object> = {
     title: 'Mi blog titulo',
     src:'https://media.timeout.com/images/103817003/image.jpg',
     description:'Paris y su puente al atardecer'
  }


  constructor() { }

  ngOnInit() {
  }

}
