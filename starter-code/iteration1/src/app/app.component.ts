import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my huble abode!';
  thePhotos = [
  {photo: '../assets/photos/download(1).png', descript: 'sushi1'},
  {photo: '../assets/photos/download(3).png' , descript: 'sush2'},
  {photo: '../assets/photos/download(2).png' , descript: 'sushi3'}];
}
