import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My 1st Angular2 app';
  picturesArr = [
    {
      title: 'pic1',
      src: 'https://media.giphy.com/media/UFXi3FSeGtKq4/giphy.gif'
    },
    {
      title: 'pic2',
      src: 'https://media.giphy.com/media/xUA7b5xHQ8fy2gXlMA/giphy.gif'
    },
    {
      title: 'pic3',
      src: 'https://media.giphy.com/media/3ohzdXH5fhjASGgI5W/giphy.gif'
    }
  ]
}
