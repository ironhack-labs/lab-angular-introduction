import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title: String = 'Maker será MVP algún día';
  photo: Object = {
    id: 'http://www.mundodeportivo.com/r/GODO/MD/p4/MasQueDeporte/Imagenes/2017/11/21/Recortada/_20171114024740-kbXD-U433054559261gLG-980x554@MundoDeportivo-Web.jpg',
    text: 'Ironhack Madrid',
  };
  text: String = 'El que fuera 15 veces All Star y una vez ganador del anillo con los Boston Celtics Kevin Garnet ha asegurado rotundamente que el jugador de los Milwaukee Bucks Thon Maker “será MVP” algún día.';

  constructor() {
  }

  ngOnInit() {
  }

}



