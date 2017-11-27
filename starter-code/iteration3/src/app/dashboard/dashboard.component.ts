import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Championship = [
    {
      year: 2015-16,
      team: "Cleveland Cavallier",
      url: "http://media.cleveland.com/startingblocks/photo/new-cavaliers-primary-logojpg-ecde4d110d8b58e4.jpg",
      bestplayers: ["Lebron James", "Lebron James", "Lebron James", "Lebron James"],
    },
    {
      year: 2015-16,
      team: "Cleveland Cavallier",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/838px-Golden_State_Warriors_logo.svg.png",
      bestplayers: ["Lebron James", "Lebron James", "Lebron James", "Lebron James"],
    },
    {
      year: 2015-16,
      team: "Cleveland Cavallier",
      url: "http://kiaenzona.com/wp-content/uploads/2016/10/SPURS.png",
      bestplayers: ["Lebron James", "Lebron James", "Lebron James", "Lebron James"],
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
