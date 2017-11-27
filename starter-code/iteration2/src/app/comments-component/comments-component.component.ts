import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  comment = "Comentarios";
  comments = [{
    name: "Pepe",
    date: "12.12.2017",
    comment: "I am awesome"
  },
  {
    name: "Juan",
    date: "13.12.2017",
    comment: "I am cool"
  },
  {
    name: "Jose",
    date: "14.12.2017",
    comment: "I am a loser"
  }]
}
