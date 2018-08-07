import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {

  championships = [
      {year: '2014-15', 
      name: 'Cleveland Cavaliers',
      image: 'https://cdn.shopify.com/s/files/1/1055/1228/products/NBOP0607_57df60ca-42e7-4373-8c72-d350ac3526ff_1024x1024.jpg?v=1522965618',
      players: ['James Lebron', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
      },
      {year: '2015-16', 
      name: 'Golden State Warriors',
      image: 'http://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      players: ['James Lebron', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
      },
      {year: '2013-14', 
      name: 'San Antonio Spurs',
      image: 'https://vignette.wikia.nocookie.net/logopedia/images/d/d7/200px-San_Antonio_Spurs_svg.png/revision/latest?cb=20160511024947',
      players: ['James Lebron', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
      }
  ]

  constructor() { }

  ngOnInit() {
  }

}
