import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  image1: string = `http://www.meta-studio.eu/resources/files/filemanager/source/IRONHACK%20MADRID/12.jpg`;
  description1: string = 'Ironhack Madrid';

  image2: string = `http://www.ironhack.com/assets/landing-pages/assets/images/courses/frontend-course-3.jpg`;
  description2: string = `Ironhack Barcelona`;

  image3: string = `http://www.miamiherald.com/news/business/technology/um003d/picture120436938/alternates/LANDSCAPE_1140/ironhackclass`;
  description3: string = `Ironhack Miami`;




}
