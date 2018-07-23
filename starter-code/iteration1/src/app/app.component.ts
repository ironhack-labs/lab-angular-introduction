import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo album!';
  images = [
    {url: "https://www.kippel01.com/files//fotos/ironhack/ironhack-equipo-948.jpg", description:"Ironhack Madrid"},
    {url: "https://i.blogs.es/27b5b1/code/450_1000.jpg", description:"Ironhack Barcelona"},
    {url: "http://e01-expansion.uecdn.es/assets/multimedia/imagenes/2017/06/20/14979611169142.jpg", description:"Ironhack Miami"}
  ]
}
