import { Component } from '@angular/core';
import { ChampionshipsComponent } from './championships/championships.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  new ChampionshipsComponent(2017, 'Golden State Warriors', 
  ['Stephen Curry', 'Kevin Durant' ], 
  new URL("https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png"  ));
  
}
