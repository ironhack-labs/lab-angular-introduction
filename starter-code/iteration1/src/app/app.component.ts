import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stockholm!';
  photos: Array<Object> = [
  {url: "./assets/sthlm1.jpg", description: "subway"},
  {url: "./assets/sthlm2.jpg", description: "water"},
  {url: "./assets/sthlm3.jpg", description: "cold"}
  ];
}
