import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {
  title = 'Comments';

  comments: Array<Object> = [
    {
      id: 1,
      username: 'Bobby Tables',
      date: new Date(),
      description: 'It seems quite complicated, how much experience is required to enroll the course?'
    }, {
      id: 2,
      username: 'Bobby Tables',
      date: new Date(),
      description: 'We give you a prework, that you have to do at home, that will help you to face the course without any problem :)'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
