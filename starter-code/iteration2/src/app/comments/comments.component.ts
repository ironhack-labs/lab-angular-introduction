import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent{
  commentsArr=[
    {
      username: 'Brandom Stark',
      date: '23-07-2018 16:50',
      content: 'Hush Hodor! No more Hodoring!'
    },
    {
      username: 'Hodor',
      date: '23-07-2018 16:50',
      content: 'HOLD THE DOOOR!!'
    }
  ];
}
