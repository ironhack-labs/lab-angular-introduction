import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  formcomments = {
    name: "",
    description: "",
  };
  comments = [{
    name: "Pablo",
    description: "I love Ramen",
    date: "21/12/2017"
  },
  {
    name: "Fresi",
    description: "Vamonos de Rumba",
    date: "02/11/2017"
  },
  {
    name: "Rocio",
    description: "Gatetes Rocks!",
    date: "21/10/2016"
  }];


  constructor() { }

  ngOnInit() {
  }

}
