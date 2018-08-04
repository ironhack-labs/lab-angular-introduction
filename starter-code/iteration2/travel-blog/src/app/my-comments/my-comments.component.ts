import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css']
})

export class MyCommentsComponent implements OnInit {
  title: string = 'Comments';
  comments: Array<Object> = [
    {
      id: 1,
      name: 'John Smith',
      date: '08/01/2018',
      time: '10:31',
      description: 'Great blog!'
    }, {
      id: 2,
      name: 'Pablo Sanchez',
      date: '08/01/2018',
      time: '15:26',
      description: 'These are amazing tips, thanks!'
    }, {
      id: 3,
      name: 'Margaret Jones',
      date: '08/02/2018',
      time: '8:47',
      description: 'Wow, what an amazing trip! I hope I can take one like this soon.'
    }, {
      id: 4,
      name: 'William Walter',
      date: '08/04/2018',
      time: '13:13',
      description: 'Thanks for sharing this info, and amazing picture!'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
