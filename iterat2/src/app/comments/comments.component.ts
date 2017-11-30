import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
// comment: string;
// name: string;

comments: Array<object> = [
  { comment: 'first comment', name: 'I'},
  { comment: 'second comment', name: 'you'},
  { comment: 'third comment', name: 'we'}
];

  constructor() { }

  ngOnInit() {
  }

}
