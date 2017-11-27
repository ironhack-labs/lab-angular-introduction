import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<Object>;

  constructor() {
    this.comments = [
      {
        name: 'Bob',
        date: '19/07/2016 19:30',
        text: 'Minions ipsum belloo! Tatata bala tu uuuhhh tatata bala tu jiji wiiiii'
      },
      {
        name: 'Walter',
        date: '19/07/2016 19:30',
        text: 'Minions ipsum belloo! Tatata bala tu uuuhhh tatata bala tu jiji wiiiii'
      },
    ]
  }

  ngOnInit() {
  }

}
