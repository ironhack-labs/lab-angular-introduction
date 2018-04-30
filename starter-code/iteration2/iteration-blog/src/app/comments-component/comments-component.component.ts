import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  comentarios: Array<Object> = [
    {
      nombre: "Pedro",
      fecha: "01-01-2018",
      comentario: "Todo muy bien"
    },
    {
      nombre: "Alvaro",
      fecha: "01-02-2018",
      comentario: "Todo muy normal"
    },
    {
      nombre: "Raul",
      fecha: "01-03-2018",
      comentario: "Todo muy regular"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
