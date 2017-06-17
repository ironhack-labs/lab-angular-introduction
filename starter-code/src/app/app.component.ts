import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Photos of Dogs';
  photos: Object[] = [
    {
      path: 'assets/golden.gif',
      desc: 'Golden Retriever(s)?'
    },
    {
      path: 'assets/pug.gif',
      desc: 'Pug Pug'
    },
    {
      path: 'assets/shiba.gif',
      desc: 'Hi, I\'m a Shiba'
    },
  ];
}
