import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css']
})
export class NbaChampionsComponent implements OnInit {

  championships: Object[] = [{}];


  constructor() {

    this.championships[0] = { 
      year: '2016',
      team: 'Cleveland Cavalliers',
      champion_url: 'https://upload.wikimedia.org/wikipedia/it/8/8b/Cleveland_Cavaliers_Logo.png',
      best_players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
    };

    this.championships[1] = { 
      year: '2014-15',
      team: 'Golden State Warriors',
      champion_url: 'https://s-media-cache-ak0.pinimg.com/originals/22/6b/97/226b978ee19ffff038cc1d6b69232939.png',
      best_players: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
    };

    this.championships[2] = { 
      year: '2013-14',
      team: 'San Antonio Spurs',
      champion_url: 'https://vignette3.wikia.nocookie.net/nba/images/e/ec/San_Antonio_Spurs_logo.png/revision/latest?cb=20101020224944',
      best_players: ['Tim Duncan', 'Tony Parker', 'Manu Ginobili', 'Kawhi Leonard', 'Tiago Splitter']
    };

  }

  ngOnInit() {
  }


}
