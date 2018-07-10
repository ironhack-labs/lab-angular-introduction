import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ironhack Locations!';

  album: Array<Photo> = [
    { photoUrl: "https://secure.meetupstatic.com/photos/event/4/f/d/e/600_468140446.jpeg",
      description: "Ironhack Miami" },
    { photoUrl: "https://cdn-images-1.medium.com/max/1137/1*vTB9s3-vabseGYBucM1aBA.png",
      description: "Ironhack Madrid" },
    { photoUrl: "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/ironhack-tech-school-openhouse-expats.jpg?itok=PmbZmWRN",
      description: "Ironhack Barcelona" },

  ]

}

class Photo {
  photoUrl: string;
  description: string;
}