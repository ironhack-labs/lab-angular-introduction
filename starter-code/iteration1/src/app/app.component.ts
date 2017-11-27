import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app works!";
  img1 = {
    src:
      "https://www.wired.com/images_blogs/rawfile/2013/10/DeathtoStock8-200x100.jpg",
    comment: "larifari"
  };
  img2 = {
    src:
      "https://photos.the-scientist.com/legacyArticleImages/1993/04/Stock-market-200x100.jpg",
    comment: "larifari"
  };
  img3 = {
    src: "http://www.oceanstockimages.com.au/img/s/v-2/p764504336-11.jpg",
    comment: "larifari"
  };
}
