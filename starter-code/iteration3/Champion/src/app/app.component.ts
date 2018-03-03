import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Championships: Array < object > = [{
      first: '2015-16',
      name: 'Cleveland Cavaliers',
      img: 'https://piratasdelbasket.net/wp-content/uploads/2017/05/cleveland-cavaliers.jpg',
      best: ['Lebron James', 'asdasd', 'qweqwe', 'asdasd', 'gggffg']
    },
    {
      first: '2014-15',
      name: 'Cleveland Cavaliers',
      img: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png',
      best: ['Stephen Curry', 'aaaaa', 'bbbbb', 'cccc', 'dddd']
    },
    {
      first: '2013-14',
      name: 'Cleveland Cavaliers',
      img: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
      best: ['Tim Dncan', 'qqqq', 'wwwww', 'dddd', 'rrrrr']
    }
  ];
}
