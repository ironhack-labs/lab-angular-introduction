import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Album of the Best Things Ever';
  content = [
    {
      imageUrl: 'https://avatars0.githubusercontent.com/u/583231?s=460&v=4',
      imageDesc: 'El Gatopulpo'
    }, {
      imageUrl: 'http://techiestuffs.com/wp-content/uploads/2017/08/camping-finland.jpg',
      imageDesc: 'Hacer Campamento'
    }, {
      imageUrl: 'https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg',
      imageDesc: 'Una cosa grande de guacamole'
    }
  ];
}
