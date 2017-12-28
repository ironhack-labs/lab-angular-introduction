import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-box',
  templateUrl: './comments-box.component.html',
  styleUrls: ['./comments-box.component.css']
})
export class CommentsBoxComponent implements OnInit {
  commentList: Array<any>;
  newComment: Object = {};

  constructor() { }

  ngOnInit() {
    this.commentList = [{
      id: 1,
      name: "Pol",
      text: "M'encanta Cadaqués!!!"
    }, {
      id: 2,
      name: "Berta",
      text: "M'agradaria molt tornar a Besalú"
    }, {
      id: 3,
      name: "Maite",
      text: "Trobo a faltar les Illes Balears, encara que no siguin dins de Catalunya, estàn plenes de catalans"
    }];
  }

  removeComment(id) {
    this.commentList = this.commentList.filter((item) => item.id !== id);
  }

  addComment() {
    this.commentList.unshift(this.newComment);
    this.newComment = {}
  }

}
