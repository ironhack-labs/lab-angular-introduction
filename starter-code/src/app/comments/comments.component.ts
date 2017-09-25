import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<Object> = [
    { author: "Chris Estepa",
      date: "25/09/2017",
      comment: "The Marx Brothers at their best"},
    { author: "Rufus T. Firefly",
      date: "26/09/2017",
      comment: "One of the greatest comedies of all time!"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
