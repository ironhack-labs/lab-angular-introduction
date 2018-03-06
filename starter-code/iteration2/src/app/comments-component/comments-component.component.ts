import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  constructor() { }
  comments: Array<Object> = [
    {
      author: 'Bobby Tables',
      updatedAt: new Date,
      content: 'I want to attend!'
    },
    {
      author: 'IronHack',
      updatedAt: new Date,
      content: 'Do it then!'
    }
  ];
  ngOnInit() {
  }

}
