import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  userComment = [
    {user:"Laura", date:new Date(), text: "fjdsmlfdjk"},
    {user:"Juan", date:new Date(), text: "jsjjdj jdjdjdjd"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
