import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-championships',
  templateUrl: './nba-championships.component.html',
  styleUrls: ['./nba-championships.component.css']
})
export class NbaChampionshipsComponent implements OnInit {

  caveliers: Array<string> = ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao'];
  warriors: Array<string> = ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Getsus Ezeil'];
  spurs: Array<string> = ['Tim Duncan', 'Tony Parker', 'Manu Ginobili', 'Kawhi Leonard', 'Tiago Splitter'];
  constructor() { }

  ngOnInit() {
  }

}
