import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent {

  name: Array<string>;
  content: Array<string>;

  constructor() {
    this.name = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5', 'Name 6'];
    this.content = ['Comment 1', 'Comment 2', 'Comment 3', 'Comment 4', 'Comment 5', 'Comment 6'];
  }
}
