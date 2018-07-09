import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  title = "Comments";

  comments: Array<Comment> = [
    {user:"Bobby", comment:"Awesome school"},
    {user:"Alan", comment:"Good teaching"},
    {user:"Daniel", comment:"Not so close to home"}
  ]

  constructor() { }

  ngOnInit() {
  }
}

class Comment {
  user: string;
  //date: Date;
  comment: string
}
