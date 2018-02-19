import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  title = 'Comments';
  comments = [
    { author: 'Baby Jane', date: new Date("October 13, 2014 11:13:00"), comment: 'The Date object lets you work with dates (years, months, days, hours, minutes, seconds, and milliseconds)' },
    { author: 'Johnny Fisher', date: new Date("December 15, 2017 17:03:00"), comment: 'A computer program is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called statements. A JavaScript program is a list of programming statements.' },
    { author: 'Lee Ann Spencer', date: new Date(), comment: 'The **= operator is an experimental part of the ECMAScript 2016 proposal (ES7). It is not stable across browsers. Do not use it.' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
