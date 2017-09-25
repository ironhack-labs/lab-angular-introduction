import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  img1 = 'https://www.arquitecturayempresa.es/sites/default/files/content/arquitecturayempresa_ironhack_02.jpg';
  img2 = 'https://okdiario.com/img/2016/05/iron-hack.jpg';
  img3 = 'https://educartis-production.s3.amazonaws.com/images/original-c7af33ea172283b1462804ba14e47b4262abb1c6.jpg?1464248758';
  width = 200;
  text1 = 'Ironhack Madrid';
  text2 = 'Ironhack Barcelona';
  text3 = 'Ironhack Miami';
}
