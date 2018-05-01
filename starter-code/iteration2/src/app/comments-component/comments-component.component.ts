import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {

  data = [
    {
      name: 'Pepe',
      description: 'Lorem fistrum papaar papaar caballo blanco caballo negroorl pecador torpedo. Pupita condemor jarl jarl va usté muy cargadoo papaar papaar. Pecador amatomaa condemor condemor a peich a peich. Hasta luego Lucas ese pedazo de por la gloria de mi madre de la pradera se calle ustée. Pecador mamaar jarl diodenoo me cago en tus muelas de la pradera va usté muy cargadoo te va a hasé pupitaa ese pedazo de está la cosa muy malar.'
    },
    {
      name: 'Paco',
      description: 'Lorem fistrum condemor fistro no puedor me cago en tus muelas pecador. A peich ahorarr ese que llega ese hombree fistro a wan te va a hasé pupitaa a peich a gramenawer benemeritaar mamaar. Diodenoo por la gloria de mi madre fistro tiene musho peligro torpedo. Te voy a borrar el cerito ese hombree diodenoo ese pedazo de pupita a peich por la gloria de mi madre. A wan va usté muy cargadoo mamaar ahorarr de la pradera apetecan a wan ese pedazo de al ataquerl.'
    },
    {
      name: 'Juan',
      description: 'Lorem fistrum mamaar te voy a borrar el cerito se calle ustée al ataquerl ahorarr. Se calle ustée fistro de la pradera benemeritaar se calle ustée por la gloria de mi madre me cago en tus muelas llevame al sircoo sexuarl. Ahorarr diodeno a peich pupita pupita. Llevame al sircoo no puedor condemor está la cosa muy malar la caidita va usté muy cargadoo qué dise usteer. Qué dise usteer está la cosa muy malar va usté muy cargadoo caballo blanco caballo negroorl diodenoo benemeritaar benemeritaar.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
