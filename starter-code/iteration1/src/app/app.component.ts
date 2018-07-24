import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Album!';
  seeds = [
    {
      "image": 'https://img.europapress.es/fotoweb/fotonoticia_20180309191938_640.jpg',
      "citie": "Ironhack Madrid"
    },
    {
      "image": 'https://www.kippel01.com/files//fotos/ironhack/ironhack-equipo-948.jpg',
      "citie": "Ironhack Barcelona"
    },
    {
      "image": 'http://blog.ironhack.com/wp-content/uploads/2016/12/Coding-Bootcamp-Ironhack-Graduates-December-2016-Barcelona-1-920x518.png',
      "citie": "Ironhack Miami"
    }
  ];
}
