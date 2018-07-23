import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gallery = [
    {
      title: 'Ironhack Madrid',
      image: 'http://e01-expansion.uecdn.es/assets/multimedia/imagenes/2017/06/20/14979611169142.jpg'
    },
    {
      title: 'Ironhack Barcelona',
      image: 'https://secure.meetupstatic.com/photos/event/9/f/8/f/600_467620847.jpeg'
    },
    {
      title: 'Ironhack Miami',
      image: 'http://miamiherald.typepad.com/.a/6a00d83451b26169e201bb08a0c81c970d-pi'
    }
  ]
}
