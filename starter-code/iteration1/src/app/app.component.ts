import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Dominik, app works!";
  imageOne = {
    src: `https://i.ytimg.com/vi/GHhFtkGfaWU/hqdefault.jpg`,
    description: "That is a funny dog"
  };
  imageTwo = {
    src: `https://i.ytimg.com/vi/Mq0yEI_xpb8/hqdefault.jpg`,
    description: "That is a funny cat"
  };
  imageThree = {
    src: `https://i.ytimg.com/vi/vEO4WavlXdA/hqdefault.jpg`,
    description: "That is a funny Igel"
  };
}
