import { Component } from '@angular/core';
import { ChampionshipsComponent } from './championships/championships.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  championships = [new ChampionshipsComponent(2017, 'Golden State Warriors', 
  ['Stephen Curry', 'Kevin Durant', 'Klay Thompson', 'Draymond Green', 'Andre Iguodala'], 
  new URL("https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png" )),
  new ChampionshipsComponent(2016, 'Cleveland Cavaliers', 
  ['Matthew Dellavedova', 'Channing Frye', 'Kyrie Irving', 'LeBron James', 'Richard Jefferson' ], 
  new URL("https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/cavaliers/images/170531-global-logo.png" )),
  new ChampionshipsComponent(2015, 'Golden State Warriors', 
  ['Klay Thompson', 'Stephen Curry', 'David Lee	', 'Nemanja Nedović', 'Draymond Green' ], 
  new URL("https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png" ))]
}
