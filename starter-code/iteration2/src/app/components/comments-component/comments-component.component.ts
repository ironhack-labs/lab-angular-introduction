import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  comment: Array<object>;

  constructor() {
    this.comment = [
      {
        name: 'Bobby Tables',
        date: '19/07/2016 19:30',
        text: 'It seems  quite complicated, how much previous experience is required to enroll the course?'
      },
      {
        name: 'Ironhack School',
        date: '19/07/2016 20:35',
        text: 'We give you a pre-work, that you have to do at home, that will help you to face the course without any problem :)',

      }
    ]
  }

  ngOnInit() {
  }

}
