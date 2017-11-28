import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: {name: String, date: string, time: string, comment: string}[] = [{
    name: 'Pablo',
    date: '27-Feb-2017',
    time: '19:33',
    comment: 'blablabla'
  },
    {
      name: 'Mireia',
      date: '28-Feb-2017',
      time: '14:33',
      comment: 'blablablablablablablablabla'
    }
];

  constructor() { }

  ngOnInit() {
  }

}
