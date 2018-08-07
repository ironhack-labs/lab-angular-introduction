import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css']
})
export class MyCommentsComponent implements OnInit {

  comments: Array<Object> = [
    {
      name: 'Bobby Tables',
      date: new Date,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel.`
    },
    {
      name: 'Ironhack School',
      date: new Date,
      text: `Lorem ipsum dolor sit amet.`
    }
  ]

  ngOnInit() {
  }

}
