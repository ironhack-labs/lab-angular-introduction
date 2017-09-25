import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  title: string = "Comments";
  comments: any =[
    {name: "Ben", comment:"I tried to get angular forms working and failed."},
    {name: "Bill", comment:"Me too"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
