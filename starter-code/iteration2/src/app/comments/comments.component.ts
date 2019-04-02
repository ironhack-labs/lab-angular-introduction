import { Component, OnInit } from '@angular/core';
import { CommentItem } from "./comment-item/CommentItem";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  title: string;
  comments: Array<CommentItem>;

  constructor() { }

  ngOnInit() {
    this.title = 'Comments';
    this.comments = [
      { author: 'Daniel Ayuso', dateTime: new Date(), comment: 'Awesome route around Avila'},
      { author: 'Alberto Iniesta', dateTime: new Date(), comment: 'I prefer the gym'}
    ];
  }

}
