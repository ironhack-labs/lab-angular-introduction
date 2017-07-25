import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment: Object = {};
  commentList: Array<Object> = [];
  

  constructor() { }

  ngOnInit() {
  }

  postComment() {
    if(this.comment["name"] && this.comment["description"]) {
      this.commentList.push({ 
        name: this.comment["name"],
        description: this.comment["description"],
        date: new Date()
    });
      this.comment = {};
    }
  }
}
