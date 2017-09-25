import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration2',
  templateUrl: './iteration2.component.html',
  styleUrls: ['./iteration2.component.css']
})
export class Iteration2Component implements OnInit {
  title = 'Learn how to code with Ironhack';
  img = {
    url: 'http://photo980x880.mnstatic.com/124e03f6e11408ffbde647fb2b648298/la-gran-via-de-madrid.jpg',
    height: 400
  };
  text = 'Lorem fistrum se calle ustée al ataquerl te voy a borrar '
    + 'el cerito amatomaa va usté muy cargadoo está la cosa muy malar. '
    + 'Condemor la caidita ese pedazo de qué dise usteer a wan me cago en '
    + 'tus muelas la caidita apetecan ese pedazo de diodenoo. Se calle ustée '
    + 'ese pedazo de no te digo trigo por no llamarte Rodrigor ese que llega '
    + 'pecador llevame al sircoo no te digo trigo por no llamarte Rodrigor a peich a wan.';

  constructor() { }

  ngOnInit() {
  }

}
