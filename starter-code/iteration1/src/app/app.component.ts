import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gallery';
  images: Array<Object>;

  constructor() {
    this.images = [
      {
        title: 'Sandwich Pusheen',
        url: '/assets/fancy.gif'
      },
      {
        title: 'Tired Pusheen',
        url: '/assets/giphy.gif'
      },
      {
        title: 'Creative Pusheen',
        url: '/assets/push.gif'
      },
    ]
  }
}
