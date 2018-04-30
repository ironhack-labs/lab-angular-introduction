import { Component } from "@angular/core";

@Component({
  selector: "app-championships",
  templateUrl: "./championships.component.html",
  styleUrls: ["./championships.component.css"]
})
export class ChampionshipsComponent {
  year: string;
  teamName: string;
  championUrl: string;
  bestPlayers: Array<string>;
  champion: Array<object>;

  constructor() {
    this.champion = [
      {
        year: 1947,
        teamName: "Philadelphia Warriors",
        championUrl:
          "https://en.wikipedia.org/wiki/1946%E2%80%9347_Philadelphia_Warriors_season",
        bestPlayers: [
          "Dallmar, Howie 1",
          "Fleishman, Jerry 1",
          "Fulks, Joe 1",
          "Guokas, Matt 1"
        ]
      },
      {
        year: 1947,
        teamName: "Philadelphia Warriors",
        championUrl:
          "https://en.wikipedia.org/wiki/1946%E2%80%9347_Philadelphia_Warriors_season",
        bestPlayers: [
          "Dallmar, Howie 2",
          "Fleishman, Jerry 2",
          "Fulks, Joe 2",
          "Guokas, Matt 2"
        ]
      },
      {
        year: 1947,
        teamName: "Philadelphia Warriors",
        championUrl:
          "https://en.wikipedia.org/wiki/1946%E2%80%9347_Philadelphia_Warriors_season",
        bestPlayers: [
          "Dallmar, Howie 3",
          "Fleishman, Jerry 3",
          "Fulks, Joe 3",
          "Guokas, Matt 3"
        ]
      }
    ];
  }
}
