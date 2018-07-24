import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Album';
  img1 = 'https://d1bvpoagx8hqbg.cloudfront.net/originals/experiencia-en-tokyo-japon-por-satoko-f35a3898e1cd95b59a08c939fb129c6d.jpg';
  description1 = 'Tokyo'
  img2 = 'https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_1080,q_70,w_1920/v1/clients/vancouverbc/aerial_9286c8f8-5198-4ef6-92c9-f593c0e2f354.jpg';
  description2 = 'Vancouver'
  img3 = 'https://www.viajaraitalia.com/wp-content/uploads/2011/05/Colosseum_in_Rome_Italy-1024x601.jpg'
  description = 'Roma'
}
