import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teams:Array<object> = [
    {
      name: 'Boston Celtics',
      year: 1957,
      best: [
        'John Havlicek',
        'Paul Pierce',
        'Larry Bird',
        'Robert Parish',
        'Kevin McHale'
      ],
      imgUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/bos.png'
    },
    {
      name: 'Chicago Bulls',
      year: 1991,
      best: [
        'Michael Jordan',
        'Scottie Pippen',
        'Bob Love',
        'Luol Deng',
        'Jerry Sloan'
      ],
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png'
    },
    {
      name: 'Los Angeles Lakers',
      year: 1949,
      best: [
        'Adrian Dantley',
        'Karl Malone',
        'Bob McAdoo',
        'Wilt Chamberlain',
        'Jim Pollard'
      ],
      imgUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/lal.png'
    }
  ];
}
