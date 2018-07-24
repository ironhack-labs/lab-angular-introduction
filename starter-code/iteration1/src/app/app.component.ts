import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Album!';
  arr = [{name: 'carmen', color: 'rojo', src: 'https://cdn.pixabay.com/photo/2018/02/15/21/55/sunset-3156440_960_720.jpg'},
  {name: 'lola', color: 'blanco', src: 'https://cdn.pixabay.com/photo/2018/02/15/21/55/sunset-3156440_960_720.jpg'}]
}
