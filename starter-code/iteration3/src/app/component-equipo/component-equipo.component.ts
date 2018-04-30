import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-equipo',
  templateUrl: './component-equipo.component.html',
  styleUrls: ['./component-equipo.component.css']
})
export class ComponentEquipoComponent implements OnInit {
  Championships = [
    {
      year: "2015-16",
      champion: "Cleveland Cavaliers",
      championUrl: "http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcle.png",
      bestPlayers: ["Lebron James", "Kyrie Iraving", "Kevin Love", "J.R. Smith", "Anderson Varejao"]

    },
    {
      year: "2014-15",
      champion: "Golden State Warrior",
      championUrl: "http://images.footballfanatics.com/AppLogos/NBA/NBA_Golden_State_Warriors_200x200_trans.png",
      bestPlayers: ["Stephen Kurry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Gestus Ezeli"]
    },
    {
      year: "2013-14",
      champion: "San Antonio Spurs",
      championUrl: "http://www.pngmart.com/files/4/San-Antonio-Spurs-PNG-Clipart.png",
      bestPlayers: ["Tim Duncan", "Tony Parker", "Manu Ginobili", "Kawhi Leonard", "Tiago Spliter"]  
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
