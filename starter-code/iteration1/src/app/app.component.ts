import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'album';
  album: { src: string, description: string}[] = [
    {
      src: '../assets/photo1.png',
      description: 'Ironhack Madrid'
    },
    {
      src: '../assets/photo2.png',
      description: 'Ironhack Barcelona'
    },
    {
      src: '../assets/photo3.png',
      description: 'Ironhack Miami'
    }
  ];
}
