import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments : Array<Object> = [{
    poster: 'Fulanito Mapache',
    date: new Date("2015-03-25"),
    message: "So fluffy!"
  },
  {
    poster: 'Pepe Bigotes',
    date: new Date("2015-03-28"),
    message: "Look at those whiskers!"
  }]
  constructor() { }

  ngOnInit() {
  }

}
