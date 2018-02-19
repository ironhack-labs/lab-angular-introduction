import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi there Angular!';
  subTitle = 'Gona break the pana!'
  items = [
    { src: '../assets/img/gato.jpg', description: 'What a cat' },
    { src: '../assets/img/perro.jpg', description: 'What a little dog' },
    { src: '../assets/img/gato2.jpg', description: 'What a really nice cat, again' }
  ]
}
