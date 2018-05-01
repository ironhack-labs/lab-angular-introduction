import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbachampions-component',
  templateUrl: './nbachampions-component.component.html',
  styleUrls: ['./nbachampions-component.component.scss']
})
export class NbachampionsComponentComponent implements OnInit {

  data: Array<Object> = [
    {
      champ_year: '2013-14',
      team_name: 'San Antonio SPurs',
      best_players: ['Duncan, Tim', 'Parker, Tony', 'Ginobili, Manu', 'Leonard, Kawhi'],
      logo_url: 'https://cdn.worldvectorlogo.com/logos/san-antonio-spurs-1.svg'
    },
    {
      champ_year: '2014-15',
      team_name: 'Golden State Warriors',
      best_players: ['Curry, Stephen', 'Thompson, Klay', 'Green, Draymond', 'Iguodala, Andre'],
      logo_url: 'https://usatftw.files.wordpress.com/2016/05/logo-golden-state-warriors.png?w=1000&h=600&crop=1'
    },
    {
      champ_year: '2015-16',
      team_name: 'Cleveland Cavaliers',
      best_players: ['James, LeBron', 'Irving, Kyrie', 'Love, Kevin', 'Allen, Ray'],
      logo_url: 'https://cbscleveland.files.wordpress.com/2014/12/cavslogo_770x433.jpg?w=770'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
