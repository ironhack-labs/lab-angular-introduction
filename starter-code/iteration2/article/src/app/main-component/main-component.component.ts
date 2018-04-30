import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  constructor() { }
  article = new Article("skyline.jpg", "lorem ipsum dolor sit amet, etc etc");
  
  ngOnInit() {

  }
}

class Article {
  constructor(
    public picture: string,
    public explanation: string
  ) {}
}