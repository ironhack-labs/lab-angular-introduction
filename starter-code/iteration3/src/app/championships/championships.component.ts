import { Component } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent {
    content = 'test'
    championships = [{
      year: '2017–18',
      name: 'Golden State Warriors',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/400px-Golden_State_Warriors_logo.svg.png',
      bestplayers: ['Steph Curry', 'Kevin Durant', 'Draymond Green', 'Klay Thompson']
    },
    {
      year: '2016–17',
      name: 'Golden State Warriors',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/400px-Golden_State_Warriors_logo.svg.png',
      bestplayers: ['Steph Curry', 'Kevin Durant', 'Draymond Green', 'Klay Thompson']
    },
    {
      year: '2015–16',
      name: 'Golden State Warriors',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/400px-Golden_State_Warriors_logo.svg.png',
      bestplayers: ['Steph Curry', 'Draymond Green', 'Klay Thompson']
    },
    {
      year: '2014–15',
      name: 'Golden State Warriors',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/400px-Golden_State_Warriors_logo.svg.png',
      bestplayers: ['Steph Curry', 'Draymond Green', 'Klay Thompson']
    },
    {
      year: '2013–14',
      name: 'San Antonio Spurs',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png',
      bestplayers: ['Manu Ginóbili', 'Tony Parker', 'Tim Duncan']
    },
    {
      year: '2012–13',
      name: 'San Antonio Spurs',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png',
      bestplayers: ['Manu Ginóbili', 'Tony Parker', 'Tim Duncan']
    }
  ]
}
