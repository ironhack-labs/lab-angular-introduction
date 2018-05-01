import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  constructor() {}

  title: String = 'Titulo del artículo';
  img: String = 'http://www.elblogdecuencavila.com/wp-content/uploads/2007/05/Leonor-recorte.jpg';
  description: String = 'Lorem fistrum amatomaa quietooor no te digo trigo por no llamarte Rodrigor. Ese que llega benemeritaar a gramenawer a gramenawer torpedo qué dise usteer a peich se calle ustée apetecan de la pradera. Por la gloria de mi madre jarl hasta luego Lucas te voy a borrar el cerito. Papaar papaar torpedo hasta luego Lucas se calle ustée te va a hasé pupitaa te voy a borrar el cerito benemeritaar qué dise usteer. Caballo blanco caballo negroorl torpedo te va a hasé pupitaa amatomaa qué dise usteer apetecan de la pradera por la gloria de mi madre. Hasta luego Lucas ese pedazo de torpedo al ataquerl a wan de la pradera de la pradera. Sexuarl por la gloria de mi madre apetecan a gramenawer a gramenawer por la gloria de mi madre la caidita a gramenawer.';

  ngOnInit() {}
}
