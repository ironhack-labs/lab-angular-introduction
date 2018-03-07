import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  constructor() { }

  comments: Array<Object> = [
    {
      author: 'Gabo',
      updatedAt: new Date,
      content: 'Comentario 1'
    },
    {
      author: 'Gabo2',
      updatedAt: new Date,
      content: 'Comentario 2'
    }
  ];


  ngOnInit() {
  }

}
