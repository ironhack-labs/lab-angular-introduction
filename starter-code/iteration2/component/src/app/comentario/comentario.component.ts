import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  title = 'Sergio';
  comentarios: Array<object> = [
    {nombre: 'pepe',
    text: 'mucha polucion en este lugar'
    },
    {nombre: 'paco',
    text: 'muchos parques en la zona'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
