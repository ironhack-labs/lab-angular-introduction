import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comments-component',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentList: Array<Comment> =[
    new Comment("some-name", new Date(), "Sit ut dolor duis aliqua amet nisi dolor mollit duis eiusmod nulla pariatur labore qui."),
    new Comment("a-user", new Date(), "Qui eiusmod occaecat nisi consequat."),
    new Comment("another-user", new Date(), "Ex qui dolore fugiat sunt duis ipsum incididunt et.")
  ]

  constructor() { 
  }
  ngOnInit() {
  }

}


class Comment{
  constructor(
    public username:string,
    public date: Date,
    public aComment: string
  ){}
}

