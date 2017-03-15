import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent implements OnInit {
  teams = [
    {
        year: '2016',
        team: 'Cavaliers',
        champion_url: 'http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcle.png',
        players: [ 'Lebron', 'Kyrie', 'Kevin', 'Smith', 'Varejao']
    },
    {
        year: '2015',
        team: 'GSW',
        champion_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/838px-Golden_State_Warriors_logo.svg.png',
        players: ['Curry', 'Thompson', 'Green', 'Bogut', 'Ezeli']
    },
    {
        year: '2014',
        team: 'Spurs',
        champion_url: 'https://t5.rbxcdn.com/87f36c98232f2e2fff2e6a79407464ed',
        players: ['Duncan', 'Parker', 'Ginobili', 'Leonard', 'Splitter']
    },



  ];

  constructor() { }

  ngOnInit() {
  }

}
