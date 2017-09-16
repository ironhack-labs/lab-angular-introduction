import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title: String;
  url: String;
  text: String;
  constructor() { }

  ngOnInit() {
    this.title = "Learn How to code width Ironhack";
    this.url = "http://www.barcinno.com/wp-content/uploads/2016/05/rsz_img_8767.jpg";
    this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus bibendum ex. Quisque a ullamcorper libero. Aenean id vehicula enim, id laoreet sapien. Proin lobortis, mauris id eleifend ornare, sem lacus tincidunt lacus, eu finibus lectus magna in urna. Maecenas massa quam, gravida sed enim et, mollis aliquet ipsum. Donec ex quam, sodales quis tincidunt id, rhoncus quis elit. Aliquam iaculis semper augue, non interdum lectus commodo quis. Praesent quis felis luctus diam rhoncus auctor.";
  }

}
