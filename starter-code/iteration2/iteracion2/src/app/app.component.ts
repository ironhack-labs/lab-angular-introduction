import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <img src="{{image}}" />
    <p>{{description}}</p>
    <app-comments-component></app-comments-component>
  `
})
export class AppComponent {
  title = 'London';
  image = 'https://cdn.molaviajar.com/wp-content/uploads/2016/10/Video-Gui%CC%81a-de-Londres.-Consejos-y-experiencia.jpg';
  description = 'This is London';
}
