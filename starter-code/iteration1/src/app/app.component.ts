import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Album";
  image: Array<object> = [
    {
      image:
        "https://i.pinimg.com/originals/15/5c/96/155c96efe2c4c91047b6213d07317707.png",
      text: "Homer 1"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDazIGgkf2YWjn7dHZVWcAoawhQIZCeeIrvSZhzyPyFeqglDidw",
      text: "Homer 2"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWN1bwzqy0X2slPpxXi0I4PAVJPxaUhUSsiN2BFuLhHY_wBxlsww",
      text: "Homer 3"
    }
  ];
}
