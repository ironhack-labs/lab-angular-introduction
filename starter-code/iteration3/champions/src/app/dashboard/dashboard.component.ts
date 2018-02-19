import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  championships = [
    {
      year: '2015-2016',
      champion: 'Cleveland Cavalliers',
      // tslint:disable-next-line:max-line-length
      championUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/127px-Cleveland_Cavaliers_logo.svg.png',
      bestPlayers: ['Lebron James', 'Kyrie Irvin', 'Kevin Love', 'J.R.Smith', 'Anderson Varejao']
    },
    {
      year: '2014-2015',
      champion: 'Golden State Warriors',
      // tslint:disable-next-line:max-line-length
      championUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png',
      bestPlayers: ['Lebron James', 'Kyrie Irvin', 'Kevin Love', 'J.R.Smith', 'Anderson Varejao']
    },
    {
      year: '2013-2014',
      champion: 'San Antonio Spurs',
      // tslint:disable-next-line:max-line-length
      championUrl: 'https://www.irononlogo.com/bmz_cache/4/4bb4894e28b0c5262b557d4fc6c7f46f.image.280x157.gif',
      bestPlayers: ['Lebron James', 'Kyrie Irvin', 'Kevin Love', 'J.R.Smith', 'Anderson Varejao']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
