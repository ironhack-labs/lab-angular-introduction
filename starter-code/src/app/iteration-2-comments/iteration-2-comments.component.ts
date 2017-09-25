import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration-2-comments',
  templateUrl: './iteration-2-comments.component.html',
  styleUrls: ['./iteration-2-comments.component.css']
})
export class Iteration2CommentsComponent implements OnInit {
  title:string = 'Comments';
  titlecomment:string = 'Bobby Tables'
  date:string = '12/07/2016 19:30';
  comment:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  constructor() { }

  ngOnInit() {
  }

}
