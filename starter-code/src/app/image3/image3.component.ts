import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image3',
  templateUrl: './image3.component.html',
  styleUrls: ['./image3.component.css']
})
export class Image3Component implements OnInit {

  url: string = "https://i.pinimg.com/736x/fa/7f/31/fa7f316900ecf0d96ba6567decbbce8d--lucas-arts-costume-ideas.jpg";
  description: string = "Foto chuliguapis de Guybrush";

  constructor() { }

  ngOnInit() {
  }

}
