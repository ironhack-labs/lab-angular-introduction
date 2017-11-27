import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  commentTittle: String = 'Bobby Tables';
  date: String = '19/11/2017 18:30';
  commentText: String = 'It is true.';

  constructor() { }

  ngOnInit() {
  }

}
