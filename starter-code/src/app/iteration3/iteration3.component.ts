import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration3',
  templateUrl: './iteration3.component.html',
  styleUrls: ['./iteration3.component.css']
})
export class Iteration3Component{
  nba : any = [
      {year:"2015-16", champion:"Cleveland Cavaliers", champion_url:"https://pbs.twimg.com/profile_images/694271187401248768/uhWmMhx8_400x400.jpg", best_players:["Lebron James", "Kyrie Irving", "Kevin Love", "J.R Smith", "Anderson Varejao"]},
      {year:"2014-15", champion:"Golden State Warriors", champion_url:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png", best_players:["Stephen Curry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Gestus Ezeli"]},
      {year:"2013-14", champion:"San Antonio Spurs", champion_url:"http://kiaenzona.com/wp-content/uploads/2016/10/SPURS.png", best_players:["Tim Duncan", "Tony Parker", "Manu Ginóbili", "Kawhi Leonard", "Tiago Splitter"]},
    ]

}
