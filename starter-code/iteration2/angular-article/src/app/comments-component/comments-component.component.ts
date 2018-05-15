import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  comments = [
    {
      poster: "Bobby Tables",
      content: "It seems quite complicated, how much previous experience is required to enroll in the course.",
      timePosted: "19/07/2016 19:30"
    },
    {
      poster: "Ironhack School",
      content: "We give you a prework that you have to do at home, that will help you to face the course without any problem.",
      timePosted: "19/07/2016 20:35"
    },
    {
      poster: "Enrolled Student",
      content: "Listen. The thing about the pre-work... Is that you have to actually do it. Whether you are required to or not.",
      timePosted: "19/07/2016 20:35"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
