import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  images: Array<Object> = [
    {
      imgSrc: "../assets/images/Madrid.png",
      caption: "Ironhack Madrid"
    },
    {
      imgSrc: "../assets/images/Barcelona.png",
      caption: "Ironhack Barcelona"
    },
    {
      imgSrc: "../assets/images/Miami.png",
      caption: "Ironhack Miami"
    }
  ];
}
