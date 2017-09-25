import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA Champions List';
  champions = [{name: "Golden State Warriors", 
                year: "2016-2017", 
                logo: "http://i.cdn.turner.com/nba/nba/teamsites/images/legacy/warriors/LogoPrimary_300x329.jpg", 
                players: ["Steph Curry", "Kevin Durant", "Klay Thompson", "Draymond Green", "Andrew Bogut"]
                }, 
                {name: "Cleveland Cavaliers", 
                 year: "2015-2016", 
                 logo: "https://www.printyourbrackets.com/nba-logos/cleveland-cavaliers-logo.png", 
                 players: ["LeBronn James", "Kyrie Irving", "Kevin Love", "JR Smith", "Anderson Varejao"]
                }, 
                {name: "Golden State Warriors", 
                year: "2014-2015", 
                logo: "http://i.cdn.turner.com/nba/nba/teamsites/images/legacy/warriors/LogoPrimary_300x329.jpg", 
                players: ["Steph Curry", "Klay Thompson", "Draymond Green", "Andrew Bogut", "Gestus Ezili"]
                 }]
}
