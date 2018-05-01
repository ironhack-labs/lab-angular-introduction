import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments: Array<Comment> = [
    new Comment("Bri", "Bravo."),
    new Comment("Carl", "♥︎")
  ];
  constructor() { }

  ngOnInit() {
  }

}

class Comment {
  constructor(
    public name: String,
    public message: String
  ) { }
}
