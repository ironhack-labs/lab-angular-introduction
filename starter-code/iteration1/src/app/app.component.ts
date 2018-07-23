import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Los animalicos';
  photos: Array<Object> = [
    {
      id: 1,
      photoUrl: 'http://mediad.publicbroadcasting.net/p/kera/files/201601/shutterstock_137913404.jpg',
      name: 'Dog'
    },
    {
      id: 2,
      photoUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr03/2013/3/2/23/enhanced-buzz-orig-1716-1362283530-8.jpg?downsize=715:*&output-format=auto&output-quality=auto',
      name: 'Duck'
    },
    {
      id: 3,
      photoUrl: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
      name: 'Cat'
    }
  ];
}