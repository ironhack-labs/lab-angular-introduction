import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title = 'Learn how to code with Ironhack';
  image = '/assets/imgs/granvia.jpg';
  // tslint:disable-next-line:max-line-length
  description = 'Lorem fistrum quietooor al ataquerl qué dise usteer tiene musho peligro te va a hasé pupitaa me cago en tus muelas condemor. Ese que llega a peich está la cosa muy malar torpedo hasta luego Lucas por la gloria de mi madre te voy a borrar el cerito de la pradera no te digo trigo por no llamarte Rodrigor fistro. Ese que llega jarl llevame al sircoo quietooor. Papaar papaar pupita caballo blanco caballo negroorl no puedor caballo blanco caballo negroorl al ataquerl torpedo caballo blanco caballo negroorl a gramenawer diodeno papaar papaar. Quietooor jarl de la pradera condemor al ataquerl condemor mamaar a wan pecador ese pedazo de papaar papaar. Diodeno tiene musho peligro ese hombree qué dise usteer pupita caballo blanco caballo negroorl ahorarr.';

    constructor() { }

  ngOnInit() {
  }

}
