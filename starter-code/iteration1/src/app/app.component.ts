import { Component } from '@angular/core';
import Photo from './classes/photo';
//import image1 from '../assets/img/garden.jpg';
//import image2 from './images/park.jpg';
//import image3 from './images/road.jpg';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Album';  
  album: Array<Photo> = [
    new Photo('../assets/img/garden.jpg','description 1'),
    new Photo('../assets/img/park.jpg','description 2'),
    new Photo('../assets/img/road.jpg','description 3')
  ]
}
