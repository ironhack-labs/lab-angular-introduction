import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments: Array<object> = [
    {
      comment: "Comentario 1",
      author: "Felipe Reyes",
      date: "19/07/2016 19:30"
    },{
      comment: "Comentario 1",
      author: "Felipe Reyes",
      date: "19/07/2016 19:30"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
