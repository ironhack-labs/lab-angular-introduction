import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-component",
  templateUrl: "./main-component.component.html",
  styleUrls: ["./main-component.component.css"]
})
export class MainComponentComponent implements OnInit {
  articles: Array<Article> = [
    {
      title: "Sorry to tired for creativity",
      imageUrl:
        "https://cdn.welcometothejungle.co/uploads/organization/logo/ironhack-france.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lacus ut massa varius aliquam. Nulla non sapien justo. Etiam sed nulla posuere dui elementum viverra. Cras aliquam ut ipsum at imperdiet. Phasellus quis lectus ac lorem viverra ultricies a eget nisl. Curabitur sollicitudin arcu eget velit venenatis, sit amet hendrerit risus sodales. Etiam ullamcorper suscipit metus, malesuada ornare magna finibus eget. Ut sed lacinia ligula, eget imperdiet nunc."
    }
  ];

  constructor() {}

  ngOnInit() {}
}

class Article {
  title: string;
  imageUrl: string;
  description: string;
}
