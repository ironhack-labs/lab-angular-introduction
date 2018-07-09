import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-component",
  templateUrl: "./main-component.component.html",
  styleUrls: ["./main-component.component.css"]
})
export class MainComponentComponent implements OnInit {
  article: Array<Article> = [
    {
      title: "Learn How To Code With IronHack!",
      image:
        "http://thesightsandsounds.com/wp-content/uploads/2017/06/unicorn-01.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis aliquet nisi eu volutpat. Vestibulum eu scelerisque risus, eget maximus est. Pellentesque ultrices, diam id blandit porttitor, lectus lectus consectetur sem, at vehicula dolor justo vitae odio. Suspendisse condimentum augue eu leo lobortis, vel sollicitudin lacus convallis. In in mauris eu odio mollis lobortis sed quis nisl. Nam vel lorem vel lorem interdum rutrum vel a massa. Ut imperdiet orci ut semper convallis. Nam quis nulla ultricies, dapibus massa ut, tincidunt ipsum. Morbi eu iaculis turpis. Nulla facilisi. Nunc non ullamcorper nisi, vitae elementum ipsum. Nunc convallis lacus in nunc vestibulum, ac consequat dolor eleifend. Morbi porta nisi ac egestas dapibus."
    }
  ];
  constructor() {}

  ngOnInit() {}
}

class Article {
  title: String;
  image: String;
  description: String;
}
