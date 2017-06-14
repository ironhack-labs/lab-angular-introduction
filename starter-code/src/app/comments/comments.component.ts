import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
  comments: Object[];

  constructor() {
  this.comments = [
    {
      name: 'Felipe',
      comment: 'beautiful picture'
    },
      {
        name: 'Laura',
        comment: 'relaxing scene'
    }];
}

addComment(name: HTMLInputElement, comment: HTMLInputElement): boolean {
  this.comments.push({name: name.value, comment: comment.value});
  name.value = '';
  comment.value = '';
  return false;
}

  ngOnInit() {
  }

}
