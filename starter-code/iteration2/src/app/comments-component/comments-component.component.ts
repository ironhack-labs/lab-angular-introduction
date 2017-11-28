import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments: Array<object> = [
    {
      author: 'Author1',
      date: '2017-11-28',
      text: 'Comment text 1'
    },
    {
      author: 'Author2',
      date: '2016-10-27',
      text: 'Comment text 2'
    },
    {
      author: 'Author3',
      date: '2015-09-26',
      text: 'Comment text 3'
    },
    {
      author: 'Author4',
      date: '2014-08-25',
      text: 'Comment text 4'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
