import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ironhacks: Array<Object> = [
    {
    
      name: 'Ironhack Barcelona',
      pic: 'https://www.kippel01.com/files//fotos/ironhack/ironhack-equipo-948.jpg'
    },
    {
    
      name: 'Ironhack México',
      pic: 'https://www.kippel01.com/files//fotos/ironhack/ironhack-equipo-948.jpg'
    },
    {

      name: 'Ironhack Madrid',
      pic: 'https://www.kippel01.com/files//fotos/ironhack/ironhack-equipo-948.jpg'
    }
  ]
  
}
