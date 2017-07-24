import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo album';
  photos = [
    {url: 'assets/images/image1.png', description: 'Ironhack Madrid'},
    {url: 'assets/images/image2.png', description: 'Ironhack Barcelona'},
    {url: 'assets/images/image3.png', description: 'Ironhack Miami'}
  ]
}
