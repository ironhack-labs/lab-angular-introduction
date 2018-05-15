import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  title = 'A wonderful city';
  image = 'http://extrawall.net/images/wallpapers/93_1920x1200_cloudy_day_in_seattle.jpg';
  description = 'A city with wonderfulness to it';

  constructor() { }

  ngOnInit() {
  }

}
