import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA Championships!';
  championships = [{
    year: "2015-16",
    champion: 'Cleveland Cavaliers',
    champion_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzOcA5duHX1IuQczOSU8MRMc61hg_jxPNbYC4OBoMIOOaSJbjtHOin6aGCuQ",
    best_players: ['Lebron James', 'Kerie Irving', 'Kevin Love', 'J.R Smith', 'Anderson Varejao']
  },
  {
      year: "2014-15",
      champion: 'Golden State Warriors',
      champion_url: "http://thumbs2.ebaystatic.com/d/l225/m/mDTeGqoYlW-WU4Gb35cI4EA.jpg",
      best_players: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
    },
    {
        year: "2015-16",
        champion: 'San Antonio Spurs',
        champion_url: "https://goodlogo.com/images/logos/san_antonio_spurs_logo_3932.png",
        best_players: ['Tim Duncun', 'Tony Parker', 'Manu Ginoboli', 'Kahwi Leonard', 'Tiago Splitter']
      }
  ];
}
