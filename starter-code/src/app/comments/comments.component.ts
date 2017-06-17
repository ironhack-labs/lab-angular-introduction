import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comments-section',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Object[];

  constructor() {
    this.comments = [
      {
        name: 'Doggo 1',
        content: 'Cute Boop. I wants boop too.'
      },
      {
        name: 'Cate',
        content: 'Boops are the worst. Get out of my face.'
      },
      {
        name: 'Doggo in picture',
        content: `Hey that's me. I am doggo.`
      }];
  }

  ngOnInit() {
  }

}
