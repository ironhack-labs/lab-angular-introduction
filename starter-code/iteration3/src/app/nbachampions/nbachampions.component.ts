import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbachampions',
  templateUrl: './nbachampions.component.html',
  styleUrls: ['./nbachampions.component.css']
})
export class NBAchampionsComponent implements OnInit {

  teams=[
    {
      year: "2015-2016",
      team:"Cleveland Cavaliers",
      url:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/cle.png",
      bestplayers: ["Lebron James", "Kyrie Irving"]
    },
    {
      year: "2014-2015",
      team:"Golde State Warriors",
      url:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png",
      bestplayers: ["Stephen Curry", "Klay Tompson"]
    },
    {
      year: "2013-2014",
      team:"San Antonio Spurs",
      url:"https://vignette.wikia.nocookie.net/logopedia/images/d/d7/200px-San_Antonio_Spurs_svg.png/revision/latest?cb=20160511024947",
      bestplayers: ["Tim Duncan", "Tony Parker"]
    }
]

  constructor() { }

  ngOnInit() {
  }

}
