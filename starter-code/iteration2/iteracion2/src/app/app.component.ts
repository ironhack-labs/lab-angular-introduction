import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="cuadro">
  <h1>{{title}}</h1>
  <img src="{{fotomadrid}}" alt="">
  <p>{{madrid}}</p>
  <app-componente2></app-componente2>
  </div>
  
  `
})
export class AppComponent {
  title = 'Learn how to code width Ironhack';
  fotomadrid ='https://d312mbhej9xjay.cloudfront.net//upload/auto/flights/cities/600x315/mad.jpg';
  madrid = 'Madrid de noche es espectacular'
}