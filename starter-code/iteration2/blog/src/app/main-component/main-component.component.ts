import { Component, OnInit } from '@angular/core';
import { CommentsComponentComponent } from '../comments-component/comments-component.component';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  title = "Noticia 1";
  image = "https://www.ecestaticos.com/imagestatic/clipping/e9c/a94/e9ca943c6d6f128edd76917a3347710f/imagen-sin-titulo.jpg?mtime=1526059381";
  description = "Descripción noticia 1";

  commentsComponent: CommentsComponentComponent;

  constructor() { }

  ngOnInit() {
  }

}
