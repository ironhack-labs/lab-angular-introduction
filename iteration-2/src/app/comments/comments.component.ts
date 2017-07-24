import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
Autor1: string = 'Bobby Tables';
Date1: string = '19/07/2016 19:30';
Autor2: string = 'Ironhack School';
Date2: string = '19/07/2016 20:35';
Text1: string = 'It seems quite complicated, how much previous experience is required to enroll the course?';
Text2: string = 'We give you a pre-work, that you have to do at home, that will help you to face the course without any problem :)';
  constructor() { }

  ngOnInit() {
  }

}
