import { Component, OnInit, Input } from '@angular/core';

import { Comment } from './Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  @Input() comment: Comment;

  ngOnInit() {
  }

}
