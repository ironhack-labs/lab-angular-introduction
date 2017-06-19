import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app works!';
  photos: Object[]=[
    { description:"running",
      imageUrl:"https://static.pexels.com/photos/421160/pexels-photo-421160.jpeg"},
      { description:"solar",
      imageUrl:"https://static.pexels.com/photos/356049/pexels-photo-356049.jpeg"},
      { description:"alone",
      imageUrl:"https://static.pexels.com/photos/89854/pexels-photo-89854.jpeg"}
      ]
}
