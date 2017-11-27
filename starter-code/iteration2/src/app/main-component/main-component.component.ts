import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  article={
    title:"Learn how to code with ironhack.",
    description:"Lorem fistrum ahorarr caballo blanco caballo negroorl a peich. Tiene musho peligro no te digo trigo por no llamarte Rodrigor la caidita no puedor a wan diodenoo al ataquerl ese hombree apetecan al ataquerl sexuarl. Está la cosa muy malar torpedo no puedor la caidita ahorarr ese hombree quietooor no puedor tiene musho peligro. Caballo blanco caballo negroorl condemor ese pedazo de qué dise usteer a wan sexuarl te voy a borrar el cerito la caidita caballo blanco caballo negroorl condemor jarl.",
    image:"http://losojosdehipatia.com.es/wp-content/uploads/Santander-Ville.jpg"
  }
}
