import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css']
})
export class MyCommentsComponent implements OnInit {
  title = 'Comments: ';
  comments: Array<Object> = [
    {
      description: 'sdlkfsldfn'
    }, {
      description: 'sdfsdfsdf'
    }, {
      description: 'sdfdgdskal'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
