import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title = 'Politics';
  url = "https://funnypictures3.fjcdn.com/channel_images/f8/7d/f87de1210cfa5bd7ca3b1fd2648f6e73.png";
  description = "It´s difficult to believe them";
  
  constructor() { }

  ngOnInit() {
  }

}
