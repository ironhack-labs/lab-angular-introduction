import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './newcomment.component.html',
  styleUrls: ['./newcomment.component.css']
})
export class NewCommentComponent implements OnInit {
  comments: Array<Object> = [{
    author: "Bobby Tables",
    description: "It seems quite complicated, how much previous experience is required to enroll the course?",
    date: "19/07/2016 19:30"
  }, {
    author: "Ironhack School",
    description: "We give you a pre-work, that you have to do at home, that will help you to face the course without any problem :)",
    date: "19/07/2016 20:35"
  }]
  constructor() { }

  ngOnInit() {
  }

}
