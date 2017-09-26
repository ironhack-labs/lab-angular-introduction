import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA Championships';

  champions: any =[
    { year:'2016-17',
      team:'Golden State Warriors',
      championship_url:'',
      best_players: ['Steph Curry', 'Kevin Durant', 'Draymond Green']
    },

    {
      year:'2015-16',
      team:'Cleveland Cavaliers',
      championship_url:'',
      best_players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejo']
    }
  ];
}
