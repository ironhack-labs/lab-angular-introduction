import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  title: string = 'Comments';
  username1: string = 'Roberto Tablas';
  comment1: string = 'Aqui va un comentario';
  username2: string = 'Escuela de brujeria tecnologica'
  comment2: string = 'Aqui va un comentario';
  constructor() { }

  ngOnInit() {
  }

}
