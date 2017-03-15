import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments = [
    {name: 'Bob', comment: 'Great Job' },
    {name: 'Sally', comment: 'Comments are a great feature' },
    {name: 'Jane', comment: 'Too Many Comments' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
