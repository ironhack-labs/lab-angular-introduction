import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  title: string = "Comments";
  subtitle: string = "bobby tables";
  date: Date = null;
  comment: string = "Looking to make a transition into a technical career? Ironhack's Web Development Bootcamp is designed to help you acquire the right set of skills to land a job as a junior developer or get started in another technical role.";

  constructor() { }

  ngOnInit() {
  }

}
