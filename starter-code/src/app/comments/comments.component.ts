import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments:String[]

  constructor() { }

  ngOnInit() {
    this.comments = ['Comentario 1', 'Comentario 2', 'Comentario 3']
  }

  addComment(comment) {
    this.comments.push(comment);
    return false;
  }

}
