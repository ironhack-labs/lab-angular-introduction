import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Felines';
  myImages: Array<Object> = [
    {
      id: 1,
      url: 'https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg',
      name: 'Cat'
    }, {
      id: 2,
      url: 'http://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_leopard_0.jpg',
      name: 'Leopard'
    }, {
      id: 3,
      url: 'https://c402277.ssl.cf1.rackcdn.com/photos/1620/images/story_full_width/bengal-tiger-why-matter_7341043.jpg?1345548942',
      name: 'Tiger'
    }
  ];
}
