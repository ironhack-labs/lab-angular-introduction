import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {

  championships: { 
      year: string,
      champion: string, 
      championUrl: string, 
      bestPlayers: Array<string> 
    }[] = [
    { 
      year: "2015-16", 
      champion: "Cleveland Cavaliers",
      championUrl: "http://falso9sports.com/wp-content/uploads/cle.png", 
      bestPlayers: ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R Smith", "Anderson Varejao"]
    },
    { 
      year: "2014-5", 
      champion: "Golden State Warriors",
      championUrl: "http://images.footballfanatics.com/AppLogos/NBA/NBA_Golden_State_Warriors_200x200_trans.png", 
      bestPlayers: ["Stephen Curry", "Klay Thomson", "Drayong Green", "Andrew Bogut", "Gestus Ezeli"]
    },
    { 
      year: "20153-14", 
      champion: "San Antonio Spurs",
      championUrl: "https://media1.fdncms.com/sacurrent/imager/u/blog/2545356/saspurs-1jpg?cb=1470955128", 
      bestPlayers: ["Tim duncan", "Tony Parker", "Manu Ginóbili", "Kawhi Leonard", "Tiago Spliter"]
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
