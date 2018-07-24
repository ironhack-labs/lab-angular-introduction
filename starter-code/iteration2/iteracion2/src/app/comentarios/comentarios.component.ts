import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  title = "Comments"
  subtitle = "Bobby Tables"
  comentario = "It seems quite complicated"
  subtitle2 = "IronHackSchool"
  comentario2 = "we give you a pre-work"
  formTitle = "Add Comment"
  name = "Name"
  description = "Description"
  constructor() { }

  ngOnInit() {
  }

}
