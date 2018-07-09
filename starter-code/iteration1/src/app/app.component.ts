import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Photo album!";

  pictures: Array<Photo> = [
    {
      url: "https://media.giphy.com/media/FDu0k1BETbTjeH4xXx/giphy.gif",
      name: "Nizar"
    },
    {
      url: "https://media.giphy.com/media/Sidip9K7XRQcw/giphy.gif",
      name: "Arthur"
    },
    {
      url: "https://media.giphy.com/media/xRc6tSHPuKFva/giphy.gif",
      name: "Lucas"
    }
  ];
}

class Photo {
  url: string;
  name: string;
}
