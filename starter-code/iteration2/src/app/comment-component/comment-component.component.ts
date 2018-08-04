import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-component',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }
  comments: Array<any> = [
    {user: 'John Smith', date: '10/27/18 12:02PM', message: 'Very cool stuff, great job!'},
    {user: 'Jacob Mill', date: '10/27/18 12:02PM', message: 'Love the article!!'},
    {user: 'Sam Smith', date: '10/27/18 12:02PM', message: 'Keep up the great work.'},
  ];

  ngOnInit() {
  }

}
