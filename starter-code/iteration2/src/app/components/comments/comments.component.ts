import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = [
    {
      name: 'Bobby Lobby',
      date: '19/01/2018 19:30',
      comment: 'Really awsome bootcamp, would do it again '
    },
    {
      name: 'Blobby Bobby',
      date: '22/01/2018 20:30',
      comment: 'That a bootcamp alright'
    },
    {
      name: 'Clobby Slobby',
      date: '31/01/2018 10:30',
      comment: 'Alright alright alright'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
