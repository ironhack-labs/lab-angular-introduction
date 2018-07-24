import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments = [
    'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
    'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
    'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio.'
  ];
  constructor() { }

  ngOnInit() {
  }

}
