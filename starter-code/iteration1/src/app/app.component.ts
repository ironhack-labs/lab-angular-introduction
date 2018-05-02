import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Uncle Karl";

  photoAlbum: Array<Photo> = [
    new Photo(
      "http://thegreatthinkers.org/marx/files/2013/08/marxintro.jpg",
      "Karl Marx chilling on a stool"
    ),
    new Photo(
      "http://3.bp.blogspot.com/_Rvf4ynDyRYk/S6nVaQtSqrI/AAAAAAAAAI4/ZLGd0SRk30M/s1600/karl_marx.jpg",
      "Karl Marx 'The Gathering'"
    ),
    new Photo(
      "https://www.earlychildhoodireland.ie/wp-content/uploads/2017/02/InterestsBlog2.png",
      "Karl Marx The Spot"
    )
  ];
}

class Photo {
  constructor(public imageUrl: string, public title: string) {}
}
