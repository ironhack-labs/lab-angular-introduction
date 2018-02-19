import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions-nba',
  templateUrl: './champions-nba.component.html',
  styleUrls: ['./champions-nba.component.css']
})
export class ChampionsNbaComponent implements OnInit {
  
  title = 'Last Champions';
  best = 'Best Player';
  
  champions = [
    {
     year: '2015-2016',
     team: 'Cleveland Cavaliers',
     logo: 'http://bestdecalsonline.com/thumbnail.asp?file=assets/images/10500-CC01%20%20Cleveland%20Cavaliers%20(A).jpg&maxx=300&maxy=0',
     players: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R Smith', 'Anderson Varejao'];
    },

    {
    year: '2014-2015',
    team: 'Golden State Warriors',
    logo: 'http://www.dineshopplay.com/wp-content/uploads/sites/www.dineshopplay.com/images/event/7735/warriors.jpg',
    players: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli'],
   },

   {year: '2013-2014',
   team: 'San Antonio Spurs',
   logo: 'https://images-na.ssl-images-amazon.com/images/I/51Zr5gUw52L._SY300_.jpg',
   players: ['Tim Duncan', 'Tony Parker', 'Manu Ginobili', 'Kawhi Leonard', 'Tiago Splitter'] ,
  },
  ]

  constructor() { }

  ngOnInit() {
  }

}
