import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  comments = [
    {user: 'Andrey',comment: 'Comment 1'},
    {user: 'Juan',comment: 'Comment 2'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
