import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  title: String = "Our Galaxy";

  description: String = `A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter.[1][2] The word galaxy is derived from the Greek galaxias (γαλαξίας), literally "milky", a reference to the Milky Way. Galaxies range in size from dwarfs with just a few hundred million (108) stars to giants with one hundred trillion (1014) stars,[3] each orbiting its galaxy's center of mass.`;

  imageUrl: String = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/M82_HST_ACS_2006-14-a-large_web.jpg/1280px-M82_HST_ACS_2006-14-a-large_web.jpg";

  constructor() {}

  ngOnInit() {}
}
