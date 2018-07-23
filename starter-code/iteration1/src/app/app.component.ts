import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iteración 1';

 ironhacks: Array<Photo> = [
    {location:"Ironhack Madrid", pictureUrl:"https://www.arquitecturayempresa.es/sites/default/files/content/arquitecturayempresa_ironhack_02.jpg"},
    {location:"Ironhack Barcelona", pictureUrl:"https://www.dreamstudiesabroad.com/images/schools/ironhack/6i3qkjzfbl.jpg"},
    {location:"Ironhack Miami", pictureUrl:"http://blog.ironhack.com/wp-content/uploads/2016/06/building2.jpg"},
  ];
}
   
class Photo {
  location: string;
  pictureUrl: string;
  }

