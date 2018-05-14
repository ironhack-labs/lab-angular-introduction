import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentArray = [
    {name: "Alex", comment: "Great. Really informative article."},
    {name: "Bernard", comment: "Ha."},
  ]
  date:string = "1/27/2018";

  constructor() { }

  ngOnInit() {
  }

}
