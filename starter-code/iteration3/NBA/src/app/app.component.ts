import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA WARRIORS';
  champion = [
    {
      year: '2017/2018',
      champion: 'Boston Celtics',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/bos.png',
      bestPlayer: ['Jordan', 'Beltrán', 'Marc', 'Susana', 'Borja']
    },
    {
      year: '2020/2022',
      champion: 'Milwaukee Bucks',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/mil.png',
      bestPlayer: ['Miko' , 'Gabi' , 'Jose' , 'Yago' , 'Antea']
    },
    {
      year: '2012/2016',
      champion: 'San Antonio Spurs',
      championUrl: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
      bestPlayer: ['Chayan', 'Caliu', 'Miau', 'Ramón', 'Freddy']
    },
  ];
}
