import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comment: any;
  comments:Object[];
  newComment: Object = {};

  constructor() { }

  ngOnInit() {
  }

  addComment(comment, name) {
    console.log(comment, name)
    this.comments.unshift(this.newComment);
    return false;
  }

}
