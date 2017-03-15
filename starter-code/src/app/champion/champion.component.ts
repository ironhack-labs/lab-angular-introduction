import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent {
  champions = [
    {
      year: 1,
      name: 'Cavaliers',
      champion_url: '/assets/cavaliers.png',
      best_players: ['Player 1', 'Player 2', 'Player 3']
    },
    {
      year: 2,
      name: 'Spurs',
      champion_url: '/assets/spurs.png',
      best_players: ['Player 1', 'Player 2', 'Player 3']
    },
    {
      year: 3,
      name: 'Bulls',
      champion_url: '/assets/bulls.png',
      best_players: ['Player 1', 'Player 2', 'Player 3']
    }
  ]

}
