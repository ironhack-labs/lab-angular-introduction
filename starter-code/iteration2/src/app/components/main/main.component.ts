import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = `Article title`;
  image = 'https://www.coliseoweb.com/content/images/2016/04/skatecc.jpg';
  text = 'This article is about nothing, but it should be a longer text. This article is about nothing, but it should be a longer text. This article is about nothing, but it should be a longer text. This article is about nothing, but it should be a longer text.';

  constructor() {}

  ngOnInit() {}



}
