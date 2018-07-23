import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {

  comments = [
    {
      author: "Autor 1",
      comment: "Comment 1",
      date: new Date()
    },
    {
      author: "Autor 2",
      comment: "Comment 2",
      date: new Date()
    },
    {
      author: "Autor 3",
      comment: "Comment 3",
      date: new Date()
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
