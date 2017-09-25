import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = [
    { 
     name: "Bobby",
     comment: "It seems quite complicated, how much previous experience do I need?"
    },
    {
    name: "IronHack",
    comment: "We give you pre-work, don't worry!"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
