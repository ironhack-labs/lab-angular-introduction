import { Component, OnInit } from '@angular/core';

export class BestPlayer {
  name: string;
}
export class Champion {
  id: number;
  year: string;
  championTeam: string;
  championUrl: string;
  bestPlayers: BestPlayer[];
}

const BEST_PLAYERS_2016_2017: BestPlayer[] = [
  { name: 'Kevin Durant'   }, 
  { name: 'LeBron James'   }, 
  { name: 'Andre Iguodala' }
]

const BEST_PLAYERS_2015_2016: BestPlayer[] = [
  { name: 'Kawhi Leonard^' }, 
  { name: 'LeBron James'   }, 
  { name: 'Kevin Durant'   }
]

const BEST_PLAYERS_2014_2015: BestPlayer[] = [
  { name: 'Dirk Nowitzki' },
  { name: 'LeBron James'  }, 
  { name: 'Kobe Bryant'   }
]

const CHAMPIONS: Champion[] = [
  { id: 1, year: '2016-2017', championTeam: 'Golden State Warriors', championUrl: 'https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg', bestPlayers: BEST_PLAYERS_2016_2017 },
  { id: 2, year: '2015-2016', championTeam: 'Cleveland Cavaliers',   championUrl: 'http://content.sportslogos.net/logos/6/222/full/6268_cleveland_cavaliers-alternate-2011.png', bestPlayers: BEST_PLAYERS_2015_2016 },
  { id: 3, year: '2014-2015', championTeam: 'Golden State Warriors', championUrl: 'https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg', bestPlayers: BEST_PLAYERS_2014_2015 },
];



@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})

export class ChampionshipsComponent {
  champions = CHAMPIONS;
}
