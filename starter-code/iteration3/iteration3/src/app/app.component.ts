import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  championship: Array<Championship> = [
    new Championship(
      '2012-2013',
      'Miami Heats',
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/200px-Miami_Heat_logo.svg.png',
      ['James, LeBron', 'Chalmers, Mario', 'Allen, Ray', 'Miller, Mike']
    ),
    new Championship(
      '2016-2017',
      'Golden State Warriors',
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png',
      ['Barnes, Matt', 'Clark, Ian', 'Curry, Stephen', 'Pachulia, Zaza']
    ),
    new Championship(
      '2009-2010',
      'Los Angeles Lakers',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/200px-Los_Angeles_Lakers_logo.svg.png',
      ['Artest, Ron', 'Brown, Shannon	', 'Bryant, Kobe', 'Odom, Lamar']
    ),
  ];
  constructor() {}
}

class Championship {
  constructor(
    public year: string,
    public name: string,
    public championUrl: string,
    public list: Array<string>
  ) {}
}
