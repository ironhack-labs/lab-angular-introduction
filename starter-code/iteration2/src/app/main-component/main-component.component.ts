import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  img = 'http://sologuides.com/wp-content/uploads/bucharest-palace-parliament-825x275.jpg';
  title = "Bucharest Travel Guide";
  description = "El Palacio del Parlamento Rumano (en rumano: Palatul Parlamentului din România) es la sede de las dos cámaras del Parlamento de Rumania. Está situado sobre la Colina Spirii (en rumano: Dealul Spirii) en el centro de Bucarest, siendo el edificio administrativo civil más grande del mundo3​ y el segundo edificio más grande del mundo después de El Pentágono estadounidense.3​ Es además el edificio administrativo más costoso y pesado.3​ Se extiende sobre un área total de 340.000 m².";

  constructor() { }

  ngOnInit() {
  }

}
