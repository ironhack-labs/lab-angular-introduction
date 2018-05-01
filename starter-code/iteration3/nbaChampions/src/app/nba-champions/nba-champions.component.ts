import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nba-champions",
  templateUrl: "./nba-champions.component.html",
  styleUrls: ["./nba-champions.component.css"]
})
export class NbaChampionsComponent implements OnInit {
  constructor() {}

  champions: Array<Object> = [
    {
      year: "1946-47",
      name: "Philadelphia Warriors",
      bestPlayers: ["Dallmar, Howie", "Fleishman, Jerry", "Fulks, Joe"],
      imgLogo:
        "https://main-tvgu1jdkm2wvqi.netdna-ssl.com/wp-content/uploads/2017/12/philadelphia_warriors_1952-1962.png"
    },
    {
      year: "1947-48",
      name: "Baltimore Bullets",
      bestPlayers: ["Fuetsch, Herm", "Hermsen, Kleggie", "Hoffman, Paul"],
      imgLogo:
        "http://www.sportsbettingtips.org/wp-content/uploads/2015/02/who-were-the-balitmore-bullets.jpg"
    },
    {
      year: "1948-49",
      name: "Minneapolis Lakers",
      bestPlayers: ["Bloom, Mike", "Carlson, Don", "	Dwan, Jack	"],
      imgLogo:
        "http://nba.frgimages.com/FFImage/thumb.aspx?i=/productImages%2F_1281000%2Fff_1281356_xl.jpg&w=600"
    }
  ];

  ngOnInit() {}
}
