import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iteration 1';

  ironhacks: Array<Photo> = [
    {location:"Ironhack Madrid", picUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyqHd4YLKcmnVSNNx0q_9l7rA_zpZLM5DHC2---RVL0P-Laeh5Q"},
    {location:"Ironhack Barcelona", picUrl:"http://scd.mashable.france24.com/sites/default/files/styles/mashable_983x554/public/thumbnails/image/ironhack.jpg?itok=Jh3UZ7rN"},
    {location:"Ironhack Miamia", picUrl:"https://dgivdslhqe3qo.cloudfront.net/careers/photos/20758/normal_photo_1479913482.jpg"},
  ];
}

class Photo {
  location: string;
  picUrl: string;
}
