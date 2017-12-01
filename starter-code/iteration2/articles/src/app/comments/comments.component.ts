import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  myComments: any[] = [
      {
        username: "MondayMadness",
        content: "Get ready for Monday, though!"
      },
      {
        username: "TerrificTuesday",
        content: "Tuesday seems so far away from you..."
      },
      {
        username: "WorkWednesday",
        content: "Hump day!!!!!!"
      },
      {
        username: "ThirstyThursday",
        content: "Let's go out for happy hour!"
      },
      {
        username: "TheWeekend",
        content: "Guys....just relax..."
      }
  ]

  constructor() { }

  ngOnInit() {
  }

}
