import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pictures: Array<Object> = [
    {
      src: 'https://okdiario.com/img/2016/05/iron-hack.jpg',
      name: 'IronHack Barcelona'
    }, {
      src: 'http://www.elreferente.es/source/ironhack-hackshow-interior.jpg',
      name: 'IronHack Madrid'
    }, {
      src: 'http://media.diariolasamericas.com/adjuntos/216/imagenes/000/105/0000105028.jpg',
      name: 'IronHack Miami'
    }
  ];
}
