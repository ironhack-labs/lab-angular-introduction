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
      pick: '/assets/ironhack-paris.jpg'
    },
    {
      description: 'Ironhack Barcelona',
      pick: '/assets/ironhack-barcelona.jpg'
    },
    {
      description: 'Ironhack Miami',
      pick: '/assets/ironhack-miami.jpg'
    }
  ]
}
