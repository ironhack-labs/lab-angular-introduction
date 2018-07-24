import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
recentChampionships:Array<any>=[
  {name: 'Golden State Warriors',
year: 2018,
img: 'http://1000logos.net/wp-content/uploads/2018/01/golden-state-warriors-logo.png',
bestPlayers:['Steph Curry', 'Klay Thompson', 'Draymond Green']
},
{name: 'Golden State Warriors',
year: 2017,
img: 'http://1000logos.net/wp-content/uploads/2018/01/golden-state-warriors-logo.png',
bestPlayers:['Steph Curry', 'Klay Thompson', 'Draymond Green']
},
{name: 'Cleveland Cavaliers',
year: 2016,
img: 'https://www.cavaliersteamshop.com/content/images/thumbs/0029447_cavs-global-shield-pin.jpeg',
bestPlayers:['Lebron James', 'Kyrie Irving', 'Kevin Love']
}
]
}
