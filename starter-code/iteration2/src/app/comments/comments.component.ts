import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments = [
    {author: 'User 1', date: new Date("October 27, 2014 17:13:00"), comment: "Hola"},
    {author: 'User 2', date: new Date("November 19, 2014 09:13:00"), comment: "Hallo"},
    {author: 'User 3', date: new Date("December 24, 2015 11:43:00"), comment: "Hello"},
  ]

  constructor() { }

  ngOnInit() {
  }

}

