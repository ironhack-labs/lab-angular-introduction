import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  comments:Array<Object> = [{
    author:     'Sandra',
    content:    'Can someone please teach me .populate ??',
    date:       Date
  },
  {
    author:     'Ali',
    content:    'Sure. $50 for my seminar.',
    date:       Date
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
