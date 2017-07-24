import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  title = 'Comments'
  comments: Array<Object> = [
    {
      name: 'Jordi',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      date: '2017-07-24 19:41'
    },
    {
      name: 'Sara',
      comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '2017-07-24 19:43'
    },
    {
      name: 'Alejandro',
      comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '2017-07-24 19:50'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
