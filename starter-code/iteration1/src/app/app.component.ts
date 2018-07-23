import { Component } from '@angular/core';
import { Album } from './album/album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IronHack Albums!';
  albums = [
    new Album('IronHack Madrid', 'https://www.ironhack.com/assets/campus-image-slider/madrid-1.jpg'),
    new Album('IronHack Barcelona', 'https://www.ironhack.com/assets/campus-image-slider/barcelona-1.jpg'),
    new Album('IronHack Miami', 'https://www.ironhack.com/assets/campus-image-slider/miami-4.jpg')
  ]
}
