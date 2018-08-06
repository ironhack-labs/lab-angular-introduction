import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Album';
  
  ironhackMad = {
    img: 'http://e01-expansion.uecdn.es/assets/multimedia/imagenes/2017/06/20/14979611169142.jpg',
    title : 'Ironhack Madrid'
  }
  ironhackBcn = {
    img: 'http://blog.ironhack.com/wp-content/uploads/2016/07/hectorges-54-1024x683.jpg',
    title : 'Ironhack Barcelona'
  }
  ironhackMiami = {
    img: 'https://secure.meetupstatic.com/photos/event/4/f/d/e/600_468140446.jpeg',
    title : 'Ironhack Miami'
  }
}
