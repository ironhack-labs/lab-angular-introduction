import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments: Array<Object> = [
    {
      user: 'Obi Wan',
      date: '12/12/12',
      comment: 'Hello there'
    }, {
      user: 'Palpatine',
      date: '6/6/6',
      comment: 'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you...'
    }
  ];
  ngOnInit() {
  }

}
