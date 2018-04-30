import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  championships: Array<object> = [
    {
      year: '2015-16',
      champion: 'Cleveland Cavaliers',
      champion_url: '',
      bestplayers: [
        'Lebron James',
        'Kyrie Irving',
        'Kevin Love',
        'J.R.Smith',
        'Anderson Varejao'
      ]
    },

    {
      year: '2014-15',
      champion: 'Golden State Warriors',
      champion_url: '',
      bestplayers: [
        'Stephen Curry',
        'Klay Thompson',
        'Draymong Green',
        'Andrew Bogut',
        'Gestus Exeli'
      ]
    },

    {
      year: '2013-14',
      champion: 'San Antonio Spurs',
      champion_url: '',
      bestplayers: [
        'Tim Duncan',
        'Tony Parker',
        'Manu Ginóbili',
        'Kawhi Leonard',
        'Tiago Splitter'
      ]   
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
