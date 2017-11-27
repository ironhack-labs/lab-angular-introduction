import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css']
})
export class NbaChampionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  champions = [
    {
      year: "1950-51",
      name: "Minneapolis Lakers",
      url: "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/lal.png",
      players: ["Mario","John","Paul"]
    },{
      year: "1951-52",
      name: "Rochester Royals ",
      url: "http://ssref.net/scripts/image_resize.cgi?min=200&url=https://d2p3bygnnzw9w3.cloudfront.net/req/201711091/tlogo/bbr/ROC-1951.png",
      players: ["Mike","Tim","Mark"]
    }, {
      year: "1952-53",
      name: "St. Louis Hawks",
      url: "https://photos-images.active.com/file/1/398/3986305/original/7be542ed-12fd-4055-a181-6cf58be9f718.jpg",
      players: ["Carl","Hugh","Tom"]
    }
  ];
}
