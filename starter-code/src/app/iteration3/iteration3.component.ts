import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration3',
  templateUrl: './iteration3.component.html',
  styleUrls: ['./iteration3.component.css']
})
export class Iteration3Component  {
  champions: Array<Object> = [
    {
      year: 2015-16,
      teamName: 'cleveland cavaliers',
      champion_url: 'assets/cavaliers_log.png',
      best_players: ["LeBron James", "Kyrie Irvin","Kevin Love", "J.R. Smith", "Anderson Varejao"]
    }, {
      year: 2015-16,
      teamName: 'cleveland cavaliers',
      champion_url: 'assets/spurns_logo.png',
      best_players: ["Stephen Curry", "Klay Thompson","Draimon Green", "Andrew Bogut", "Gestus Ezle"]
    }, {
      year: 2015-16,
      teamName: 'cleveland cavaliers',
      champion_url: 'assets/warriors_logo.png',
      best_players: ["Tim Ducan", "Tonu Parker","Manu Ginobili", "kawi Leonard", "Tiago Splitter"]
    },
  ];
}
