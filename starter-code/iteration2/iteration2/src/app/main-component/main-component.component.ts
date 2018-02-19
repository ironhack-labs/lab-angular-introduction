import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  
  title = 'The Lord of the Rings - Hak-ipedia'
  image = 'http://cdn.atomix.vg/wp-content/uploads/2017/11/Amazon_TLOTR_Atomix.jpg'
  description = 'Lorem fistrum fistro papaar papaar diodenoo. Caballo blanco caballo negroorl pupita diodeno quietooor. De la pradera llevame al sircoo hasta luego Lucas de la pradera de la pradera caballo blanco caballo negroorl. Condemor amatomaa se calle ustée torpedo ese pedazo de pecador benemeritaar amatomaa al ataquerl jarl. Pecador jarl condemor pecador caballo blanco caballo negroorl. De la pradera jarl ese hombree te va a hasé pupitaa. Te voy a borrar el cerito ahorarr mamaar caballo blanco caballo negroorl apetecan la caidita. Pupita diodeno tiene musho peligro de la pradera ese que llega al ataquerl qué dise usteer jarl qué dise usteer pupita tiene musho peligro'

  constructor() { }

  ngOnInit() {
  }

}
