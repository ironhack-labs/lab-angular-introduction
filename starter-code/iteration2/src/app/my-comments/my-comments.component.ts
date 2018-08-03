import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css']
})
export class MyCommentsComponent implements OnInit {

  constructor() { }
  
  comments = [
    {
      user: 'Bob Dylan',
      content: 'My guitar went flat'
    },
    {
      user: 'Bob Marley',
      content: 'No worries my friend. Let\'s come together to solve this'
    },
    {
      user: 'Bob the Builder',
      content: 'Everyone remain calm. Me and my handy tools will dominate this guitar'
    }
  ]

  ngOnInit() {
  }

}
