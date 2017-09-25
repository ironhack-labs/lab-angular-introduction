import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Champions';

  championships: any[] = [
    {year: 2015, name:'Warriors', url: 'http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/warriors/images/logo-gsw-primary-yellow.svg', best_players: ['Barbosa, Leandro', 'Wilt Chamberlain', 'Tim Duncan','John Havlicek']},
    {year: 2016, name: 'Warriors', url: 'http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/warriors/images/logo-gsw-primary-yellow.svg', best_players: ['Barbosa, Leandro', 'Wilt Chamberlain', 'Tim Duncan','John Havlicek']},
    {year: 2017, name: 'Warriors', url: 'http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/warriors/images/logo-gsw-primary-yellow.svg', best_players: ['Barbosa, Leandro', 'Wilt Chamberlain', 'Tim Duncan','John Havlicek']}
  ];
}
