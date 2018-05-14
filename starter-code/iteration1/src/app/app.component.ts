import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo album';
  image = [{name: 'Lion', src: '../assets/lion.jpg'},
  {name: 'Rat', src: '../assets/rat.jpg'},
  {name: 'Sheep', src: '../assets/sheep.jpg'}];
}
