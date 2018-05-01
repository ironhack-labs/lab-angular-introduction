import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championships: Array<Object> = [
    {
      year: '1987-88',
      champion: 'Los Angeles Lakers',
      champion_url: '../assets/lakers.png',
      best_players: ['Willie Glass','Ralph Tally', 'Kenny Travis', 'Frank Ford', 'Ron Vanderschaff']
    },{
      year: '1990-91',
      champion: 'Chicago Bulls',
      champion_url: '../assets/bulls.png',
      best_players: ['Michael Jordan','Will Perdue', 'Scottie Pippen', 'Bill Cartwright', 'Scott Williams']
    },{
      year: '1993-94',
      champion: 'Houston Rockets',
      champion_url: '../assets/rockets.png',
      best_players: ['Sam Cassell','Richard Petruška', 'Marcelo Nicola', 'Hakeem Olajuwon', 'Otis Thorpe']
    }
  ]
}
