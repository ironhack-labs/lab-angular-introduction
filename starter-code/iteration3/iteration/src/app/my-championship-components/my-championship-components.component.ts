import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-championship-components',
  templateUrl: './my-championship-components.component.html',
  styleUrls: ['./my-championship-components.component.css']
})
export class MyChampionshipComponentsComponent implements OnInit {
  championshipTeams: Array<ChampionshipTeam>=[
    new ChampionshipTeam("Miami Heat", 2006,"http://1000logos.net/wp-content/uploads/2017/04/Miami-Heat-Logo.png", ["Jason", "Wade", "Walker", "Haslem", "Shaq"]),
    new ChampionshipTeam("Miami Heat", 2012,"http://1000logos.net/wp-content/uploads/2017/04/Miami-Heat-Logo.png", ["Lebron", "Wade", "Battier", "Chalmers", "Bosh"]),
    new ChampionshipTeam("Miami Heat", 2013,"http://1000logos.net/wp-content/uploads/2017/04/Miami-Heat-Logo.png", ["Lebron", "Wade", "Miller", "Chalmers", "Bosh"])
  ]
  constructor() { }

  ngOnInit() {
  }

}

class ChampionshipTeam{
  constructor(
    public name: string,
    public year: number,
    public crest: string,
    public starters: Array<string>
  ){}
}