import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championships: Array<any>=[{
    year: '2016',
    name: 'Cleveland Cavaliers',
    url:'http://logos-download.com/wp-content/uploads/2016/04/Cleveland_Cavaliers_logo.jpg',
    best_players: ['Lebron James', 'Stephen Curry'],
  },{
    year: '2015',
    name: 'Golden State Warriors',
    url: 'http://i.cdn.turner.com/nba/nba/teamsites/images/legacy/warriors/LogoPrimary_300x329.jpg',
    best_players: ['Stephen Curry', 'Lebron James'],
  }];
}
