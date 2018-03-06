import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  constructor() { }
  comments: Array<Object> = [
  {
    createBy: 'Luan Silva',
    comment: 'Thanks for putting this guide toguether, already want to go.'
   },
 {
   createBy: 'Karen Fisher',
   comment: 'Can you share more info about hotel, not sure where to stay in Rio.'
 }
 ];

  ngOnInit() {
  }
}