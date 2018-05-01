import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THE MOST FAMOUS JAMAICAN VOCAL GROUPS';

  trios: Array<Trio> = [
    new Trio('The Gaylads', 'http://i2.wp.com/collectorskornernow.com/wp-content/uploads/2014/01/gaylads11.jpg'),
    new Trio('The Heptones', 'http://365daysinmusic.com/wp-content/uploads/2013/04/The-Heptones.jpg'),
    new Trio('The Maytals', 'http://xraymusic.co.uk/pictures/toots/large/maytals-mic.jpg')
  ];

}

class Trio {
  constructor(
    public imageDescription: string,
    public imageUrl: string
  ) { }
}
