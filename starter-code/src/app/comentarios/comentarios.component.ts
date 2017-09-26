import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  title = "Comments";
  titulo = " Add you comment"



  constructor() { }

  ngOnInit() {
  }

}
