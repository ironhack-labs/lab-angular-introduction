import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  title: string;
  commentArray: Array <{}>;

  constructor() { 
    this.title = "Comments";
    this.commentArray = [
      {
        id:1,
        author:"Bobby Tables",
        date:"19/07/2016 19:30",
        comment:"This questions is irrelevant"
      },
      {
        id:2,
        author:"IH",
        date:"19/07/2016 22:30",
        comment:"This reply is irrelevant"
      }
    ]
  }

  ngOnInit() {
  }

}
