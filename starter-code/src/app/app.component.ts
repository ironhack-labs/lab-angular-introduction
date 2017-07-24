import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Album';
  image1 : string = "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/2/3/d/f/600_453609183.jpeg";
  image2: string = "http://www.elreferente.es/source/ironhack-hackshow-interior.jpg";
  image3: string = "https://cdn1-es.yeeply.com/blog/wp-content/uploads/2014/04/iron1.jpg";
}
