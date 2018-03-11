import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})

export class CommentsComponentComponent implements OnInit {
  comments: Array<Object> = [{
    name: "Antonio",
    date: new Date,
    comment: "I like it"
  },
  {
    name: "Pepe",
    date: new Date,
    comment: "I hate it"
  }];

  constructor() { }

  ngOnInit() {

  }

}
