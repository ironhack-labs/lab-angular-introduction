import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = [{username: 'Bobby bojangles', createdAt: Date.now(), comment: 'I love this city'},
  {username: 'Danny devito', createdAt: Date.now(), comment: 'Could I offer you an egg in these trying times'},
  {username: 'Josh Doctson', createdAt: Date.now(), comment: 'Green 18'}]
  constructor() { }

  ngOnInit() {
  }

}
