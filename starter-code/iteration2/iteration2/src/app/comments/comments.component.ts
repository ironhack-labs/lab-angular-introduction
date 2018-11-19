import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  theComments: Array<any> = [
    {
      username: 'coolboy55',
      comment: 'I love wolf'
    },
    {
      username: 'coolboy54',
      comment: 'I love wolf first'
    }
  ] 

  constructor() { }

  ngOnInit() {
  }

}
