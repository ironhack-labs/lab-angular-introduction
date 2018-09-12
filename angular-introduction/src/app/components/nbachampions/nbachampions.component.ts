import { Component, OnInit } from '@angular/core';
interface Team{
  year: string,
  name : string,
  championUrl:string,
  bestPlayers: Array<string>
}
@Component({
  selector: 'app-nbachampions',
  templateUrl: './nbachampions.component.html',
  styleUrls: ['./nbachampions.component.css']
})
export class NBAChampionsComponent{

  teamChampionships:Array<Team> = [
    {
      year: '2015-16',
      name : 'Cleveland Cavaliers',
      championUrl:'../../../assets/cavs.png',
      bestPlayers: ['Lebron James','Kyrie Irving','Kevin Love' , 'Anderson Varejao']
    },
    {
      year: '2014-15',
      name : 'Golden State Warriors',
      championUrl:'../../../assets/state.png',
      bestPlayers: ['Stephen Curry', 'Klay Thompson','Andrew Bogut','Gestus Ezeli']
    },
    {
      year: '2013-14',
      name : 'San Antonio Spurs',
      championUrl:'../../../assets/spurs.png',
      bestPlayers: ['Tim Duncan','Tony Parker','Manu Ginobili','Tiago Splitter']
    }
  ]
}
