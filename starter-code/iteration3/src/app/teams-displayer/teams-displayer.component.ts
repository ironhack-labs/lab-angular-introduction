import { Component, OnInit } from '@angular/core';
import TeamsNBA from '../classes/Teams-nba';

@Component({
  selector: 'app-teams-displayer',
  templateUrl: './teams-displayer.component.html',
  styleUrls: ['./teams-displayer.component.scss']
})
export class TeamsDisplayerComponent implements OnInit {
  teamsNBA: Array<TeamsNBA> = [
    new TeamsNBA(2018, 'Golden State Warriors', 'https://images.vexels.com/media/users/3/130643/isolated/preview/c1af6c8c2a4d1df1456fd8d034d697b7-golden-states-warriors-logo-by-vexels.png', 
    ['Bell Jordan', 'Boucher Chris', 'Cook Quinn', 'Curry Stephen', 'Durant Kevin']),
    new TeamsNBA(2018, 'Golden State Warriors', 'https://images.vexels.com/media/users/3/130643/isolated/preview/c1af6c8c2a4d1df1456fd8d034d697b7-golden-states-warriors-logo-by-vexels.png', 
    ['Bell Jordan', 'Boucher Chris', 'Cook Quinn', 'Curry Stephen', 'Durant Kevin']),
    new TeamsNBA(2018, 'Golden State Warriors', 'https://images.vexels.com/media/users/3/130643/isolated/preview/c1af6c8c2a4d1df1456fd8d034d697b7-golden-states-warriors-logo-by-vexels.png', 
    ['Bell Jordan', 'Boucher Chris', 'Cook Quinn', 'Curry Stephen', 'Durant Kevin'])
  ]

  ngOnInit() {
  }

}
