import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  mainSection = new Main(
    "Learn how to code with Ironhack",
    "https://cdn-images-1.medium.com/max/1600/1*zw1loULEWixx7yleI9EVaw.png",
    "lorem"
  );

  constructor() {}

  ngOnInit() {}
}

export class Main {
  constructor(
    public title: string,
    public img: string,
    public description: string
  ) {}
}
