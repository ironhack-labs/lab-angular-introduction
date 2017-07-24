import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<Object> = [
    {
      username: 'Pedro',
      posted: new Date(),
      comment: 'this is a comment'
    },
    {
      username: 'Maja',
      posted: new Date(),
      comment: 'this is a another comment'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
