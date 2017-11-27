import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  photos:Array<Object> = [
    {
      img: 'https://media.giphy.com/media/1ViLp0GBYhTcA/giphy.gif',
      title: 'IronHack Madrid'
    },
    {
      img: 'https://media.giphy.com/media/1ViLp0GBYhTcA/giphy.gif',
      title: 'IronHack Barcelona'
    },
    {
      img: 'https://media.giphy.com/media/1ViLp0GBYhTcA/giphy.gif',
      title: 'IronHack Miamy'
    }
  ];
}
