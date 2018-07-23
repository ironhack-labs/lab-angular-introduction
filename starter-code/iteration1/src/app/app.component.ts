import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Angular Photo Album';
  photoAlbum = [
    {title: "IronHack Madrid", img: "images/madrid-1.jpg"},
    {title: "IronHack Barcelona", img: "images/barcelona-2.jpg"} ,
    {title: "IronHack Miami", img: "images/miami-3.jpg"}
  ]
}


