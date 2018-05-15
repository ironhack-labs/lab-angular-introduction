import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  commentbox = [
    {
  user: 'Jose',
  comment: 'Wow beautiful city.'
  },
    {
    user: 'Dali',
    comment: 'Yes, beautiful'
  }
  ];




  constructor() { }

  ngOnInit() {
  }

}
