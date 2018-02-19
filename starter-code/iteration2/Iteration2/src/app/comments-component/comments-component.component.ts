import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  comments = [
    {author: 'Bobby Tables', date: new Date("October 27, 2014 17:13:00"), comment: "Hola buenas que tal"},
    {author: 'Ironhack School Madrid', date: new Date("November 19, 2014 09:13:00"), comment: "Me encanta, super flama"},
    {author: 'Ironhack School Miami', date: new Date("December 24, 2015 11:43:00"), comment: "Increíblemente increíble"},

  ]

  constructor() { }

  ngOnInit() {
  }

}
