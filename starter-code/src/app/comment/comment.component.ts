import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Object[];

  constructor() { }

  ngOnInit() {
    this.comments = [{name:"Marc", text: "comment 1"}, { name:"Marc", text: "comment 2"}];
  }

  addComment(name, comment) {
    this.comments.push({name: name, text: comment});
    return false;
  }

}
