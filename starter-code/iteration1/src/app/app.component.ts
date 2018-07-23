import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Summer";
  photos = [
    {
      img: "https://images.unsplash.com/photo-1532298488760-970ff6decf61",
      description: "Sunset"
    },
    {
      img: "https://images.unsplash.com/photo-1532310571984-1e89ed04e1bc",
      description: "Lighthouse"
    },
    {
      img: "https://images.unsplash.com/photo-1532309975451-db55af55d385",
      description: "Camping"
    }
  ];
}