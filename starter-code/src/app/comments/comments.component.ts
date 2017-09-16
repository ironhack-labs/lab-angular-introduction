import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<string>;
  comment : string;

  constructor() { 
    this.comments = [
      "coment 1",
      "fmnds,fn",
      "dfljdlkgj"
    ];
  }

  ngOnInit() {
  }
  insertComment(comment) {
    this.comments.push(this.comment);
    this.comment = '';
  }

}
