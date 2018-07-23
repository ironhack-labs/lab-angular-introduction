import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  usuario1 = "pepe"
  usuario2 = "juan"
  usuario3 = "alejandro"

  constructor() { }

  ngOnInit() {
  }

}
