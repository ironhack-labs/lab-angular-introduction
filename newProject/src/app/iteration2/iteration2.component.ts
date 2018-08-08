import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration2',
  templateUrl: './iteration2.component.html',
  styleUrls: ['./iteration2.component.css']
})

export class Iteration2Component implements OnInit {

  article: Object = {
    title: "Kpop life",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytLFR2d9TInHsjHYec7JcARzA7g4rAFZI8GQKXDZVo2XyfdlPAg",
    description: "Really fun stuff"
  }
  constructor() {}

  ngOnInit() {
  }

}
