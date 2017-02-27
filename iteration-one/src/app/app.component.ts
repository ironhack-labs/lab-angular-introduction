import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Looney Tunes!';
  album: Array<Object> = [
    {
      name: 'bug bunny',
      url: 'http://franklycurious.com/media/1/20120625-bugsbunny.png?x40849',
      description: 'just a picture of bugs eating his favorite food.'
   },
   {
      name: 'daffy duck',
      url: 'http://www.nonstick.com/wp-content/uploads/2015/10/Daffy.gif',
      description: 'daffy duck is angry at bugs bunny!'
   },
   {
      name: 'elmer fudd',
      url: 'https://s-media-cache-ak0.pinimg.com/736x/e2/1d/8d/e21d8d9c4855c795cd83559c8dc392fe.jpg',
      description: "be vewy vewy quiet. I'm hunting wabbit."
   }
  ]
}
