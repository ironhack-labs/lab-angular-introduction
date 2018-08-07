import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent {

  championships = [
    {
      year: '2015-16',
      champion: 'Cleveland Cavaliers',
      url: 'https://piratasdelbasket.net/wp-content/uploads/2017/05/cleveland-cavaliers.jpg',
      bestplayers: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
    },
    {
      year: '2014-15',
      champion: 'Golden State Warriors',
      url: 'http://steamgirlscamp.com/wp-content/uploads/2016/03/c63-oow-warriors-logo-2716739.png',
      bestplayers: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
    },
    {
      year: '2013-14',
      champion: 'San Antonio Spurs',
      url: 'https://vignette.wikia.nocookie.net/logopedia/images/d/d7/200px-San_Antonio_Spurs_svg.png/revision/latest?cb=20160511024947',
      bestplayers: ['Tim Duncan', 'Tony Parker', 'Manu Ginóbili', 'Kawhi Leonard', 'Tiago Splitter']
    }
  ];

  constructor() { }

}
