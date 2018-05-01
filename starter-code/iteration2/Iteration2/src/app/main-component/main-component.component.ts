import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor() { }
  title = 'Learn how to code with Ironhack';
  imgUrl = 'https://www.arquitecturayempresa.es/sites/default/files/content/arquitecturayempresa_ironhack_02.jpg';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  ngOnInit() {
  }

}
