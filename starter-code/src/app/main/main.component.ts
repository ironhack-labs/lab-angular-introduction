import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
      <div>
      <h1>  {{title}} </h1>
      <img src="{{ image }}" > Imagen1
      <hr>
      <article>  {{description}} </article>
      </div>
  `,
  styles: ['article { color: blue; }']
})
export class MainComponent implements OnInit {
  title: string = 'Articulo del Blog';
  image: string = 'http://makepixelart.com/peoplepods/files/images/334000.resized.png';
  description: string = 'VOLABA POR EL CIELO';
  constructor() { }
  ngOnInit() {
  }
}
