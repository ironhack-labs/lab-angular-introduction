import { Component} from '@angular/core';

@Component({
  selector: 'app-iteration-3',
  templateUrl: './iteration-3.component.html',
  styleUrls: ['./iteration-3.component.css']
})
export class Iteration3Component {
  champions: Array<Object> = [
        {
          year: "2015-16",
          team_name: "Cleveland Cavaliers",
          champion_url: 'assets/nba-logo1.png',
          best_players: ["Lebron", "Irving", "JRSmith","Anderson Varejao"],
        },{

          year: "2014-15",
          team_name: "Golden State Warrios",
          champion_url:"assets/nba-logo2.jpeg",
          best_players: ["Stephen Curry","Klay Thompson","Andraw Bogut","Gestus Ezeli"]
        },{

        },{
          year: "2013-14",
          team_name: "San Antonio Spurs",
          champion_url:"assets/nba-logo3.jpeg",
          best_players: ["Tim Ducan","Tony Parker","Manu Ginobili","Tiago Splitter"]
        },{

        }

]

}
