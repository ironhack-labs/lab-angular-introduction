import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent {
  title = "Championships"

  Championships: Array<Champ> = [
    {year: "2015-16", name: "Cleveland Cavaliers", championUrl: "http://1.bp.blogspot.com/-8U-wrbio9F8/VXh_qaNQ--I/AAAAAAAADOY/418YPmzDEtk/s1600/Cavaliers.jpg", bestPlayers:["Lebron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Anderson Varejao"]},
    {year: "2014-15", name: "Golden State Warriors", championUrl: "http://steamgirlscamp.com/wp-content/uploads/2016/03/c63-oow-warriors-logo-2716739.png", bestPlayers:["Stephen Curry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Gestus Ezeli"]},
    {year: "2013-14", name: "San Antonio Spurs", championUrl: "https://vignette.wikia.nocookie.net/logopedia/images/d/d7/200px-San_Antonio_Spurs_svg.png/revision/latest?cb=20160511024947", bestPlayers:["Tim Duncan", "Tony Parker", "Manu Ginóbili", "Kawhi Leonard", "Tiago Splitter"]}

  ]
}

class Champ {
  year: string;
  name: string;
  championUrl: string;
  bestPlayers: Array<string>;
}