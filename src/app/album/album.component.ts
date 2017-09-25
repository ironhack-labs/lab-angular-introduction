import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.css"]
})
export class AlbumComponent implements OnInit {
  constructor() {}

  albums: Array<Object> = [
    {
      img:
        "http://www.worldatlas.com/r/w728-h425-c728x425/upload/e7/25/e7/shutterstock-184325156.jpg",
      text: "Venus"
    },
    {
      img:
        "https://www.nasa.gov/sites/default/files/images/508910main_KOI-72-STILL-6k-3_full_full.jpg",
      text: "Unknown"
    },
    {
      img:
        "https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/06/21180000/planet-10-orange-blue-final-small-800x533.jpg",
      text: "Planet Ten"
    }
  ];

  ngOnInit() {}
}
