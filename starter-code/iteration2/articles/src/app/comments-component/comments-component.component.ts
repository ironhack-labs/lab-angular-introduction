import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  title: string = "Comments";
  comments = [
    {
      author:"Fulanito",
      date: new Date(),
      content: `Dragée brownie pie.`
    },{
      author:"Menganita",
      date: new Date(),
      content: `Chupa chups lollipop jelly beans...`
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
