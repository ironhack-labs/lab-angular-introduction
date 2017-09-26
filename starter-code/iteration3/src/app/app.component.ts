import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championships = [{
  year: "1991",
  champion: "Cleveland Cavaliers",
  champion_url: "https://lh5.googleusercontent.com/-PyACUlT4OEI/AAAAAAAAAAI/AAAAAAAAq_k/xcVoLxF3uGE/s0-c-k-no-ns/photo.jpg",
  best_players: ["First Player", "Second Player", "Third Player"]}
  ]
}
