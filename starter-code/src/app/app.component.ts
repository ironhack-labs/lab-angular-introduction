import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  photoAlbum: Object[] = [
  {
    src: '../assets/IMG_1.jpg',
    description: 'NBV Bridge'
  },
  {
    src: '../assets/IMG_2.jpg',
    description: 'NBV Boat'
  },
  {
    src: '../assets/IMG_3.jpg',
    description: 'NBV Tree'
  }];
}
