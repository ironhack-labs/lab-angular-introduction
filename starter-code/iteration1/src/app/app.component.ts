import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data = [
    {
      img:  'https://media0.giphy.com/media/fnoUkpIOzpLTUhkHno/200w.webp',
      name: 'Paco',
    },
    {
      img:  'https://media1.giphy.com/media/xT9IgMegMkAGM0eqDm/200w.webp',
      name: 'Juan',
    },
    {
      img:  'https://media0.giphy.com/media/EfnGyHqdLgPioUJonq/200w.webp',
      name: 'Pepe',
    }
  ]
}
