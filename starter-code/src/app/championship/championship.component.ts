import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship',
  template: `
    <h2>championship Works!</h2>
      <br>
      <h3>{{championshipArray[0].year}}</h3>
      <h4>{{championshipArray[0].name}}</h4>
      <img src="{{championshipArray[0].champUrl}}">
      <ul>
      <li>{{championshipArray[0].bestPlayers[0].name}}</li>
      <li>{{championshipArray[0].bestPlayers[1].name}}</li>
      <li>{{championshipArray[0].bestPlayers[2].name}}</li>
      </ul>
      <h4>{{championshipArray[1].name}}</h4>
      <img src="{{championshipArray[1].champUrl}}">
      <ul>
      <li>{{championshipArray[1].bestPlayers[0].name}}</li>
      <li>{{championshipArray[1].bestPlayers[1].name}}</li>
      <li>{{championshipArray[1].bestPlayers[2].name}}</li>
      </ul>
      <h4>{{championshipArray[2].name}}</h4>
      <img src="{{championshipArray[2].champUrl}}">
      <ul>
      <li>{{championshipArray[2].bestPlayers[0].name}}</li>
      <li>{{championshipArray[2].bestPlayers[1].name}}</li>
      <li>{{championshipArray[2].bestPlayers[2].name}}</li>
      </ul>
  `,
  styles: []
})
export class ChampionshipComponent implements OnInit {
  championshipArray: Array<Object> = [{
      year: 1991,
      name: 'Chicago Bulls',
      champUrl: 'https://images-na.ssl-images-amazon.com/images/I/51whVRDl1XL._SY300_.jpg',
      bestPlayers: [{name:"jordan"},{name:"Scottie Pippen"},{name:"John Paxson"}]
  },
  {
      year: 1994,
      name: 'Houston Rockets',
      champUrl: 'https://upload.wikimedia.org/wikipedia/tr/thumb/d/de/Houston_Rockets.png/200px-Houston_Rockets.png',
      bestPlayers: [{name:"Otis Thorpe"},{name:"Hakeem Olajuwon"},{name:"Scott Brooks"}]
  },
  {
      year: 1999,
      name: 'Los Angeles Lakers',
      champUrl: 'http://www.thelogomix.com/files/u2/La-Lakers.jpg',
      bestPlayers: [{name:"Kobe Bryant"},{name:"A. C. Green"},{name:"Shaquille O'Neal"}]
  }]

  constructor() { }

  ngOnInit() {
  }

}
