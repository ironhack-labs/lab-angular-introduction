import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  title = "Comments";
  comments = "Bobby Tables";
  add = "Add your comment";
  name = "Name:";
  description = "Description:";
  comment = "Send";
  constructor() { }

  ngOnInit() {
  }

}
