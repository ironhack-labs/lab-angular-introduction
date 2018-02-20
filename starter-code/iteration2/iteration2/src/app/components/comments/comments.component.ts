import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments: Array<{}> = [
  {
    name: 'Danielle',
    comment: 'de puta madre'
  },
  {
    name: 'Shane',
    comment: 'applause'
  }
]
  constructor() { }

  ngOnInit() {
  }

}
