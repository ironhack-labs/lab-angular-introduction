import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = [
    {name: 'Julián Díaz', date: '19-05-2018', comment: 'Hola, me gusta mucho Angular!'},
    {name: 'Mario Bros', date: '19-05-2018', comment: 'Epimi, Mario!'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
