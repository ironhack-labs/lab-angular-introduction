import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  championship: Array<Object> = [
    {
      year:'2015-2016',
      champion:'Cleveland Cavaliers',
      champion_url:'http://cdn.bleacherreport.net/images/team_logos/328x328/cleveland_cavaliers.png',
      best_players: ["1","2","3"]
    },
    {
      year:'2014-2015',
      champion_url:'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      champion:'Golden State',
      best_players: ["1","2","3"]
    },
    {
      year:'2013-2014',
      champion_url:'http://cdn.bleacherreport.net/images/team_logos/328x328/san_antonio_spurs.png',
      champion:'San Antonio Spurs',
      best_players: ["1","2","3"]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
