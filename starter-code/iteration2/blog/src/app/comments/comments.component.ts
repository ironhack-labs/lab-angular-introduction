import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any[] = [
    {
      author: "Bobby",
      comment: "First comment"
    },
    {
      author:  "Billy",
      comment: "Second comment"
    },
    {
      author: "Betty",
      comment: "Third comment"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
