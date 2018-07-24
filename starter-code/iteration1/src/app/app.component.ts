import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  photos: Array<object> = [
    {
      img: "http://www.franbosquet.com/wp-content/uploads/IMG_20170612_202150.jpg",
      description: "Ironhack Madrid",
    },
    {
      img: "https://secure.meetupstatic.com/photos/event/9/f/8/f/600_467620847.jpeg",
      description: "Ironhack Barcelona",

    },
    {
      img: "http://www.refreshmiami.com/wp-content/uploads/2017/03/dsc_0281-1.jpg",
      description: "Ironhack Miami",
    }
    
  ]
}
