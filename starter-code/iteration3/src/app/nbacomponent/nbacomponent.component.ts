import { Component, OnInit } from '@angular/core';
//import { url } from 'inspector';

@Component({
  selector: 'app-nbacomponent',
  templateUrl: './nbacomponent.component.html',
  styleUrls: ['./nbacomponent.component.css']
})
export class NBAComponentComponent implements OnInit {

 teams=[
  
  {
  name:"Cleveland Cavaliers",
  year:"2015-2016",
  img:"https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/cle.png",
  url:"https://www.nba.com/cavaliers/",
  players:["Lebron James","Kevin Love","Anderson Varejao"]
  },

  {
    name:"Golden State Warriors",
    year:"2014-2015",
    img:"https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png",
    url:"http://www.nba.com/teams/warriors",
    players:["Klay Thompson","Andrew Bogut","Klay Thompson"]
    },

    {
      name:"San Antonio Spurs",
      year:"2013-2014",
      img:"https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png",
      url:"https://www.nba.com/spurs/",
      players:["Tim Duncan","Tony Parker","Tiago Splitter"]
      }

]


  constructor() { }

  ngOnInit() {
  }

}
