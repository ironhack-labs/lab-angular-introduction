import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  // poner los comments
  comments: Array<Object> = [
    {
      name: 'John',
      date: '11 apr 2018',
      comment:'some comment here'
    },
    {
      name: 'Bob',
      date: '12 apr 2018',
      comment: 'another comment here'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
