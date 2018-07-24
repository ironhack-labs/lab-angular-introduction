import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  title: 'Comments';
  comments: Array<object> = [
    {
      from: 'Bobby Tables',
      date: '19/08/2018 19:30',
      text: 'It seems quite complicated, how much previous experience is required to enroll the course',
    },
    {
      from: 'Ironhack School',
      date: '19/08/2018 19:30',
      text: 'We give you a pre-work, that you have to do at home, that will help you to face the course without any problem :)',
    }
  ];
}


