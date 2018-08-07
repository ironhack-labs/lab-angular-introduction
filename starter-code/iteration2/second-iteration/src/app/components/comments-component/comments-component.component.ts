import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent {

  title = 'Comments';
  comments = [
    {name: 'Bobby Tables', text: 'It seems quite complicated, how much previous experience is required to enroll the course?'},
    {name: 'Ironhack School', text: 'We give you a pre-work, that you have to do at home, that will help you to face the course without any problem :)'}
  ];
  
  constructor() { }

}
