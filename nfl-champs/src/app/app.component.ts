import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  championships: Array<Object> = [
    {
      year: 'XLIX	Feb. 1 2015',
      team: 'New England Patriots',
      badge_url: 'http://cdn.bleacherreport.net/images/team_logos/328x328/new_england_patriots.png'
    }, {
      year: '50	Feb. 7 2016',
      team: 'Denver Broncos',
      badge_url: 'http://cdn.bleacherreport.net/images/team_logos/328x328/denver_broncos.png'
    }, {
      year: 'LI	Feb. 5 2017',
      team: 'New England Patriots',
      badge_url: 'http://cdn.bleacherreport.net/images/team_logos/328x328/new_england_patriots.png'
    }
  ];

  bestPlayers: string[] = ['QB Tom Brady', 'K Stephen Gostkowski', 'TE Rob Gronkowski'];
}
