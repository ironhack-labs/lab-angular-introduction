import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})
export class CommentComponentComponent implements OnInit {

  comments: any[] = [
    {name: 'Jose', comment: 'Very beautiful city'},
    {name: 'Maria', comment: 'Loved it'},
    {name: 'Harry', comment: 'Hated this city'},
    {name: 'Jennifer', comment: 'The restaurants there are nice'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
