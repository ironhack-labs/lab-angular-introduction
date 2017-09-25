import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    teamList: any = [
    {
      year: '2015-16',
      name: 'Cavaliers',
      champion_url: 'https://vignette3.wikia.nocookie.net/nba2k/images/8/8b/Cleveland_Cavaliers_Logo.png/revision/latest?cb=20120119223259',
      best_players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
    },
    {
      year: '2014-15',
      name: 'Golden State Warriors',
      champion_url: 'https://images.vexels.com/media/users/3/130643/isolated/preview/c1af6c8c2a4d1df1456fd8d034d697b7-golden-states-warriors-logo-by-vexels.png',
      best_players: ['Stephen Curry', 'Klay Thompson', 'Draymond Green', 'Andrew Bogut', 'Gestus Ezeli']
    },
    {
      year: '2013-14',
      name: 'San Antonio Spurs',
      champion_url: 'https://images.vexels.com/media/users/3/132006/isolated/preview/cb8990f888a45561c9d33a73b8c2c801-san-antonio-spurs-logo-by-vexels.png',
      best_players: ['Tim Duncan', 'Tony Parker', 'Manu Ginobilli', 'Kawhi Leonard', 'Tiago Splitter']
    }
  ]
  }
