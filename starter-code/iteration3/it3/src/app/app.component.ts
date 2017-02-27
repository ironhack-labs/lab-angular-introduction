import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    Championships: Array<any> =[{
    year: 2016 ,name:'Cleveland Cavaliers',
    url:'https://en.wikipedia.org/wiki/2015%E2%80%9316_Cleveland_Cavaliers_season',
    players:['Dellavedova, Matthew','Dellavedova, Matthew','Dellavedova, Matthew','Dellavedova, Matthew', 'Dellavedova, Matthew']
  },
  {
  year: 2016 ,name:'Cleveland Cavaliers',
  url:'https://en.wikipedia.org/wiki/2015%E2%80%9316_Cleveland_Cavaliers_season',
  players:['Dellavedova, Matthew','Dellavedova, Matthew','Dellavedova, Matthew','Dellavedova, Matthew', 'Dellavedova, Matthew']
  },
  {
  year: 2016 ,name:'Cleveland Cavaliers',
  url:'https://en.wikipedia.org/wiki/2015%E2%80%9316_Cleveland_Cavaliers_season',
  players:['Dellavedova, Matthew','Dellavedova, Matthew','Dellavedova, Matthew','Dellavedova, Matthew', 'Dellavedova, Matthew']
  }];

  }
