import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Array<Photos> = [
    {
      img: "http://www.dogbazar.org/wp-content/uploads/2013/09/beagle-2.jpg",
      caption: "Best doggie"
    },{
      img: "https://i.pinimg.com/originals/22/fc/7a/22fc7a9d45463bf0c72eec3536ed10b0.jpg",
      caption: "Best bunny"
    },{
      img: "https://i.pinimg.com/originals/76/70/36/7670360c4c619b9214bb719fb49e0076.jpg",
      caption: "Best cat"
    },
    
  ]
}
