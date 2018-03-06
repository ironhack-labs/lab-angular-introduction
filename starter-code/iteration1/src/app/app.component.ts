import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  photoAlbum: Array<Object>=[
    {
      title: "IronHack Madrid",
      picPath: "https://www.ironhack.com/0be4adcffad57cfca79dbf64b3889fc2.jpg"
    },
    {
      title: "IronHack Mexico City",
      picPath: "https://secure.meetupstatic.com/photos/event/c/5/4/1/600_468050497.jpeg"
    },
    {
      title: "IronHack Miami",
      picPath: "https://cdn.evbuc.com/eventlogos/130268051/img3301128129.jpg"
    }
  ]
}
