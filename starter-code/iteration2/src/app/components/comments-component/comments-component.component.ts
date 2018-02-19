import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  name: string = 'Victor';
  comment: string = 'Ahora en serio, no entiendo nada de esto del constructor y la clase. Como se hace para poner varios comments cada uno con su nombre y comentario? Hay que hacer dentro de la clase un objeto con los campos Nombre, Fecha y Comentario? Como se hace eso? ';

  constructor() {

   }

  ngOnInit() {
  }

}


