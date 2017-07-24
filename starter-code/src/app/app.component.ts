import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Array<Object> = [
    {
      description: 'Ironhack Madrid',
      src: '/assets/madrid.jpg'
    },
    {
      description: 'Ironhack Barcelona',
      src: '/assets/barcelona.jpg'
    },
    {
      description: 'Ironhack Miami',
      src: '/assets/miami.jpg'
    }
  ]
}
