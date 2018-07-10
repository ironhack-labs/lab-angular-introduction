import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  greatWall: object = {
    pictureUrl: "../assets/greatWall.jpg",
    legend: "The Great Wall of China next to Beijing"
  };

  terracottaWarriors: object = {
    pictureUrl: "../assets/terracotta-army.jpg",
    legend: "The Terracotta warriors army in Xi'an"
  };

  riceFields: object = {
    pictureUrl: "../assets/rizieres-yunnan.jpg",
    legend: "Terraced rice fields in Yunnan province"
  };
}
