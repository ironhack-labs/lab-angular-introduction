import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Aqui ponemos una variable llamada championship que contiene objetos de equipos, dentro de cada uno un array de strings de mvp. 
  championships = [{
      name: 'equipo1',
      title: 'el gran equipo',
      players: ['marc','marc','marc','marc','marc']
    },{
      name: 'equipo2',
      title: 'el gran equipo',
      players: ['marc','marc','marc','marc','marc']
    },{
      name: 'equipo3',
      title: 'el gran equipo',
      players: ['marc','marc','marc','marc','marc']
    },{
      name: 'equipo4',
      title: 'el gran equipo',
      players: ['marc','marc','marc','marc','marc']
    }]
  
  };
