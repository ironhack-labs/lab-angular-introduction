import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
  teams: Array<Object> = [
    {
      year: '2015-16',
      champion: 'Cleveland Cavaliers',
      championUrl: 'http://nbaclubesp.com/uploads/faeb13c7744a3601841b5df98ef9d0d00e70e114',
      bestPlayers: ['Lebron James', 'kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejaos']
    },
    {
      year: '2014-15',
      champion: 'Golden State Warriors',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      bestPlayers: ['Lebron James', 'kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejaos']
    },
    {
      year: '2013-114',
      champion: 'San Antonio Spurs',
      championUrl: 'https://vignette.wikia.nocookie.net/logopedia/images/d/d7/200px-San_Antonio_Spurs_svg.png/revision/latest?cb=20160511024947',
      bestPlayers: ['Lebron James', 'kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejaos']
    }
  ];
  ngOnInit() {
  }

}
