import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Array<Object> = [
    {
      description: 'Ironhack Paris',
      src: '/assets/ironhack-paris.jpg'
    },
    {
      description: 'Ironhack Barcelona',
      src: '/assets/ironhack-barcelona.jpg'
    },
    {
      description: 'Ironhack Miami',
      src: '/assets/ironhack-miami.jpg'
    }
  ]
}
