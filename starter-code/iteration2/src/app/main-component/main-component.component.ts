import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  article = {
    title: "Lear how to code with Ironhack",
    image: "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png",
    description: "lorem ipsum dolor sit amet",
  };

  constructor() { }

  ngOnInit() {
  }

}
