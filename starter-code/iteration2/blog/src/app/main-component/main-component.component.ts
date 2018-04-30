import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-component",
  templateUrl: "./main-component.component.html",
  styleUrls: ["./main-component.component.css"]
})
export class MainComponentComponent implements OnInit {
  title = "What does a binturong look like?";
  description = "Binturongs may smell like popcorn, but it's not on their usual menu. They are classified as carnivores but eat most anything that suits their fancy: mainly fruits but also vegetables, birds, small mammals, and fish. They have been known to eat carrion, small invertebrates, eggs, leaves, and plant shoots, too.";
  image = "../../assets/binterong.jpg"
  constructor() {}

  ngOnInit() {}
}
