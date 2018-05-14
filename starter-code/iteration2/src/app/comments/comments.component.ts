import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  titleBar = 'Comments';
  comments = [{
    name: 'Dali Rojas',
    time:  '5:14PM May 14th, 2018',
    text: 'Hi!'
  },
  {
    name: 'Jose Arjona',
    time:  '5:15PM May 14th, 2018',
    text: 'Go away!'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
