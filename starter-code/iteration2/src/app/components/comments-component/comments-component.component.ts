import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  constructor() { }

  comments = [{
    author: 'Bobby Tables',
    date: '19/7/2016',
    time: '19.30',
    comment: 'It seems quite complicated, how much previous experience is needed?'
  },
  {
    author: 'Ironhack School',
    date: '19/7/2016',
    time: '20.35',
    comment: 'We will give you prework, dont worry'
  }
]

  commentForm = {
    h2: "Add your comment",
    buttonText: "Comment"
  }

  ngOnInit() {
  }

}
