import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions-component',
  templateUrl: './champions-component.component.html',
  styleUrls: ['./champions-component.component.css']
})
export class ChampionsComponentComponent implements OnInit {

  constructor() { }

  teams = [{
    logo: 'http://ssref.net/scripts/image_resize.cgi?min=200&url=https://d2p3bygnnzw9w3.cloudfront.net/req/201807242/tlogo/bbr/MNL-1956.png',
    name:'Minneapolis Lakers',
    year: '1948–49',
    bestPlayers: [
      'Chuck Hanger',
      'Cliff Crandall',
      'Arnie Ferrin',
      'Earl Gardner',
      'Dee Gibson'
    ]
  },
  {
    logo: 'http://houstonsportsteams.com/spalm/PhiladelphiaWarriors.png',
    name:'Philadelphia Warriors',
    year: '1946–47',
    bestPlayers: [
      'Dallmar, Howie',
      'Fleishman, Jerry',
      'Fulks, Joe',
      'Guokas, Matt',
      'Hillhouse, Art'
    ]
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Chicago_Stags_logo.png',
    name:'Chicago Stags',
    year: '1946–47',
    bestPlayers: [
      'Carlisle, Chet',
      'Carlson, Don',
      '	Davis, Bill',
      'Gilmur, Chuck',
      'Halbert, Chick'
    ]
  }
];

  ngOnInit() {
  }

}
