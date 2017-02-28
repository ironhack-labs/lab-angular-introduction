import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Album';
  picture = 'http://lorempixel.com/400/200';
  description = 'This is a picture';
  teams: Array<any> = [
      {name: 'NY', year: '1986', championUrl: 'http://png-5.vector.me/files/images/2/1/21594/new_york_knicks_thumb.png',

   },
      {name: 'Chicago', year: '1985', championUrl: 'http://vignette2.wikia.nocookie.net/nba2k/images/1/17/Chicago_Bulls_Logo.png' },
      {name: 'LA', year: '1980', championUrl: 'https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/052013/untitled-1_38.png' }
  ];
  bestPlayers: Array<any> = [{name: 'Michael Jordan'}, {name: 'Peter Ewing'},{name: 'Magic Johnson'},{name: 'Charles Barkley'}, ]

}
