import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  champions = [
    {
      year: '2016',
      name: 'Cleveland Cavaliers',
      championurl: 'https://i2.wp.com/www.nbamaniacs.com/wp-content/uploads/2012/09/cavaliers-logo.jpg',
      bestplayers: ['Lebron James', 'Kyrie Irving', 'Kevin Love']
    },
    {
      year: '2015',
      name: 'Golden State Warriors',
      championurl: 'http://wwwcdn.howdesign.com/wp-content/uploads/LogoPrimary_300x329.jpg',
      bestplayers: ['Stephen Curry', 'Klay Thompson', 'Draymong Green']
    },
    {
      year: '2014',
      name: 'San Antonio Spurs',
      championurl: 'http://www.sportsecyclopedia.com/nba/sanantonio/Spursscript.gif',
      bestplayers: ['Tim Duncan', 'Tony Parker', 'Manu Ginóbili']
    }
  ]
}
