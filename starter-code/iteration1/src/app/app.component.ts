import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  content = [{
    url: 'https://static.posters.cz/image/750/poster/lord-of-the-rings-trilogy-i11353.jpg',
    name: 'The trilogy starts'
  },
  {
    url: 'https://icdn4.digitaltrends.com/image/amazon-lotr-casting-header-720x720.jpg',
    name: 'Performers'
  },

  {
    url: 'http://www.tinglado.net/tic/almarzarey/hotpot/lordrings/Copia%20de%20the-lord-of-the-rings%20-the-one-ring-3d-screensaver.jpg',
    name: 'Saga'}

]
}




