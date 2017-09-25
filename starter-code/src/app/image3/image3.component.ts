import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image3',
  templateUrl: './image3.component.html',
  styleUrls: ['./image3.component.css']
})
export class Image3Component implements OnInit {
  url: string = 'https://www.thefamouspeople.com/profiles/images/chico-marx-4.jpg';
  description: string = "Harpo Marx";
  constructor() { }

  ngOnInit() {
  }

}
