import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "IH Locations!";

  img1 = {
    src: "assets/barcelona.jpg",
    comment: "IH BCN"
  };
  img2 = {
    src: "assets/madrid.jpg",
    comment: "IH MAD"
  };
  img3 = {
    src: "assets/miami.jpg",
    comment: "IH MIA"
  };
}
