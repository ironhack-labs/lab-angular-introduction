import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app works!';
  photoAlbum: Object[] = [
    {
      description: 'this is my cat',
      imageUrl: 'https://media.giphy.com/media/nNxT5qXR02FOM/giphy.gif'
    },
    {
      description: 'this is my dog',
      imageUrl: 'https://media.giphy.com/media/kwAi4WrChkSfm/giphy.gif'
    },
    {
      description: 'this is my goat',
      imageUrl: 'https://media.giphy.com/media/108Y1SMrGePEDC/giphy.gif'
    }
  ]
}
