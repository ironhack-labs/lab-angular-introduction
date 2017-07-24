import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Array <Object>= [
    {
      title: 'Photo 1',
      url:'https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/2/3/d/f/600_453609183.jpeg'
    },
    {
      title: 'Photo 2',
      url:'https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/2/3/d/f/600_453609183.jpeg'
    },
    {
      title: 'Photo 3',
      url:'https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/2/3/d/f/600_453609183.jpeg'
    },
  ]
}
