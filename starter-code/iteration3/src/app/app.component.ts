import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of the last NBA champions';
  championsNBA: Array<object> = [
    {
      year: `2017-18`,
      name: `Golden State Warriors`,
      // tslint:disable-next-line:max-line-length
      logo: `https://images.vexels.com/media/users/3/130643/isolated/preview/c1af6c8c2a4d1df1456fd8d034d697b7-estados-de-oro-guerreros-logo-by-vexels.png`,
      bestPlayers: [`Stephen Curry, PG`, `Klay Thompson, SG`, `Kevin Durant, SF`, `Draymond Green, PF`, `JaVale McGee, C`]
    },
    {
      year: `2016-17`,
      name: `Golden State Warriors`,
      // tslint:disable-next-line:max-line-length
      logo: `https://images.vexels.com/media/users/3/130643/isolated/preview/c1af6c8c2a4d1df1456fd8d034d697b7-estados-de-oro-guerreros-logo-by-vexels.png`,
      bestPlayers: [`Stephen Curry, PG`, `Klay Thompson, SG`, `Kevin Durant, SF`, `Draymond Green, PF`, `JaVale McGee, C`]
    },
    {
      year: `2015-16`,
      name: `Cleveland Cavaliers`,
      logo: `https://www.cavaliersteamshop.com/content/images/thumbs/0029447_cavs-global-shield-pin.jpeg`,
      bestPlayers: [`George Hill, PG`, `JR Smith, SG`, `Kyle Korver, SG`, `LeBron James, SF`, `Kevin Love, C`]
    },
  ];
}
