import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {
  championArray = [
    {
    year:'1991',
    name:'Chicago Bulls',
    championUrl:'http://images.genius.com/61c181eafd4fa6cc2495282642602814.1000x1000x1.jpg',
    bestplayers:['Armstrong, B.J.','Cartwright, Bill','Jordan, Michael'	]
    },
    {
    year:'2016',
    name:'Cleveland Cavaliers',
    championUrl:'https://vignette.wikia.nocookie.net/nbasports/images/7/7b/Cleveland-Cavaliers-Logo.jpg/revision/latest?cb=20130628123829',
    bestplayers:['Frye, Channing','James, LeBron','Jones, James'	]
    },
    {
    year:'2007',
    name:'Boston Celtics',
    championUrl:'https://s3.amazonaws.com/freebiesupply/large/2x/boston-celtics-logo-transparent.png',
    bestplayers:['Pierce, Paul ','Pruitt, Gabe','Powe, Leon'	]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
