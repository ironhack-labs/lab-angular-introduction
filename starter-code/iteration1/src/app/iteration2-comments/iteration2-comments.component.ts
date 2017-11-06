import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration2-comments',
  templateUrl: './iteration2-comments.component.html',
  styleUrls: ['./iteration2-comments.component.css']
})
export class Iteration2CommentsComponent implements OnInit {
  comments: Array<object>;
  constructor() {
  this.comments = [
    {
    author: "Nick Navarro",
    comment_: "I love Ironhack and have never felt so empowered!",
    date: Date(),
  },
  {
    author: "Dr. Seuss",
    comment_: "Oh where you will go!",
    date: Date(),
  }
  ];
  }
  
  ngOnInit() {
  }

}
