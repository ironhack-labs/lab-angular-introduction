import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  Championships: Array<object> = [{
    year: '2015-16',
    name: 'Cleveland Cavaliers',
    teamBadge: 'https://lh3.googleusercontent.com/4QDIbVQHoLMWggi5B0Y1Ltd503zMbPQBIcypM1EJ_67lMoyC1xVScxnUdgse0v5WrvsH8ZE=s160',
    bestPlayers: ['Lebron James', 'Kyrie Irving', 'J. R. Smith', 'Tristan Thompson', 'Kevin Love']
  },
  {
    year: '2014-15',
    name: 'Golden State Warriors',
    teamBadge: 'https://lh3.googleusercontent.com/0brpmxwHrw1qFuCVcB4PuLuZP1s-xeBrIR0TuxB8OFFUMJAUF7NtTlOu9yjGfRVh7ms6Xg=s85',
    bestPlayers: ['Stephen Curry', 'Klay Thompson', 'Andre Iguodala', 'Draymond Green', 'Harrison Barnes']
  },
  {
    year: '2013-14',
    name: 'San Antonio Spurs',
    teamBadge: 'https://lh3.googleusercontent.com/kjWmJdTB5rBvRu4rNNywWhfL-a9SY0Vxf-lSNmLsUZKmIWTc-uSqayrZCCjbSOIh55xOPg=s158',
    bestPlayers: ['Boris Diaw', 'Tony Parker', 'Kawhi Leonard', 'Tim Duncan', 'Manu Ginóbili']
  }
  ];
  ngOnInit() {
  }
}
