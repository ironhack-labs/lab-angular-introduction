import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  constructor() { }
comment: Array<Object> = [
{comentario: 'mon premier comment',
fecha: new Date},
{comentario: 'mon deuxième comment',
fecha: new Date},
{comentario: 'mon troisième comment',
fecha: new Date}
];
  ngOnInit() {
  }

}
