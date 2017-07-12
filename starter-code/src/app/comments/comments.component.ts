import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  template: `<button id="comment" (click)="addComment()">
             <b> Comment </b> </button>
          `,
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
  commenterName: string;
  date: Date;
  commentText: string;
  constructor(
  ) { }
  addComment() {
  this.commenterName = "Igor";
  this.date = new Date();
  this.commentText = "Wow! Cool stuff!";
  }
  ngOnInit() {
  }

}
