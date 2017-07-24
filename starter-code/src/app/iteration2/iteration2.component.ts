import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration2',
  templateUrl: './iteration2.component.html',
  styleUrls: ['./iteration2.component.css']
})
export class Iteration2Component implements OnInit {
  title = 'Learn to Code with Ironhack';
  url = 'https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/2/3/d/f/600_453609183.jpeg';
  description = 'Grandioso Hackshow el que vivimos el pasado 16 de diciembre en @CampusMadrid. Muy especial porque ha sido el primer Hackshow de nuestro nuevo bootcamp de UX y porque se hizo junto al de Web. Resultado? Un maravilloso encuentro en el que algunos alumnos de ambos grupos demostraron lo que han aprendido. Es por esto por […]';
  constructor() { }

  ngOnInit() {
  }

}
