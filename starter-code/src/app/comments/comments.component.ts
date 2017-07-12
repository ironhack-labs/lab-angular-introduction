import { Component, OnInit } from '@angular/core';
// const Component = require ('@angular.core').Component;
// const OnInit = require ('@angular.core').OnInit;

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

// module.exports = class FooterComponent
export class CommentsComponent implements OnInit {

  // message: string = 'This are my comments'

  myComments: Object[]=[
    {name: 'Bobby Tables',
     comment: 'Angular looks like a very cool tool!! '
   },
   {name: 'David Alarcon',
     comment:'  Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
