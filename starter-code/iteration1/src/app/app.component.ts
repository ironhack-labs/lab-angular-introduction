import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  images: Array<Object> = [
  {
    id: 1,
    title: 'image 1',
    src: 'https://www.askideas.com/wp-content/uploads/2016/11/Cute-Kitty-In-With-Samurai-Funny-Animal-Picture.jpg'
  },
  {
    id: 2,
    title: 'image 2',
    src: 'https://i.ytimg.com/vi/GHhFtkGfaWU/hqdefault.jpg'
  },
   {
    id: 3,
    title: 'image 3',
     src: 'https://i.ytimg.com/vi/7QHKQs6SFOw/hqdefault.jpg'
  }
];
}
