import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  title = 'First comment';
  autor = 'Pecador de la pradera';
  date = new Date();
  content = `Sexuarl ahorarr sexuarl quietooor por la gloria de mi madre pecador
    apetecan fistro me cago en tus muelas ahorarr va usté muy cargadoo. Mamaar
    pupita va usté muy cargadoo ese que llega se calle ustée a wan no puedor
    benemeritaar.`;
}
