import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  champions: Champion[] = [
    new Champion(
      "2014",
      "Cleveland Red Pandas",
      "https://dingo.care2.com/pictures/greenliving/1148/1147399.large.jpg",
      [" red panda 1", "red panda 2", "red panda 3"]
    ),

    new Champion(
      "2015",
      "Golden State Golden Pandas",
      "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1496166014%2Fred-pandas-1-FT-BLOG0517.jpg%3Fitok%3DjLaFSPVS&w=700&q=85",
      ["golden panda 1", "golden panda 2", "golden panda 3"]
    ),

    new Champion(
      "2016",
      "San Antonio Texan Pandas",
      "https://cdn.arstechnica.net/wp-content/uploads/2017/01/Ailurus_fulgens_RoterPanda_LesserPanda-800x976.jpg",
      ["Texan panda 1", "Texan panda 2", "Texan panda 3"]
    )
  ];

  constructor() {}

  ngOnInit() {}
}

class Champion {
  constructor(
    public year: string,
    public name: string,
    public image: string,
    public players: string[]
  ) {}
}
