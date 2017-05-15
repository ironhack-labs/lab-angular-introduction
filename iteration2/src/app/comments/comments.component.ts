import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }
  comment1 = 'What the fuck is that';
  comment2 = 'Call the police';
  comment3 = "It's so little!";

  ngOnInit() {
  }

}
