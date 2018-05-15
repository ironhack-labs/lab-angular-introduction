import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photoalbum: Array<object> = [
    {caption: 'Grateful Dead - Fillmore', imageSRC: '/assets/images/BG051-PO.jpg'},
    {caption: 'Jimi Hendrix - Fillmore', imageSRC: '/assets/images/BG105-PO.jpg'},
    {caption: 'Grateful Dead - Nassau Coliseum', imageSRC: '/assets/images/BG288-PO.jpg'},
  ];
}
