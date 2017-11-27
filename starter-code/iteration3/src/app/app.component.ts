import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  championships: { year: number, name: string, champion_url: string, best_players: Array<string> }[] = [
    {
      name: 'Minneapolis Lakers',
      year: 1950,
      champion_url: 'https://en.wikipedia.org/wiki/Los_Angeles_Lakers',
      best_players: ['George Mikan', 'Jim Pollard']
    },
    {
      name: 'Rochester Royals ',
      year: 1951,
      champion_url: 'https://en.wikipedia.org/wiki/Sacramento_Kings',
      best_players: ['Bob Davies']
    }
  ];
}
