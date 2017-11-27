import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comment-component',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})
export class CommentComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  comments = [{
      name: "Pablo",
      comment: "A tope de Ramen",
      date: "23/11/2017 14:00"
    },{
      name: "Cami",
      comment: "Let's run!",
      date: "21/11/2017 13:00"
    },{
      name: "Fresi",
      comment: "Un fantasma rosa... Fresi!",
      date: "25/11/2017 10:00"
    }]
}
