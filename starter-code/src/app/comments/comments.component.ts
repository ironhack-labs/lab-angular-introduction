import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  message: string = 'This are my comments'

  myComments: Object[]=[
    {name: 'Bobby Tables',
     comment: 'Angular looks like a very cool tool!! '
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
