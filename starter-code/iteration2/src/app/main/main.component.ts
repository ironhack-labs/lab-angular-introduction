import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  main: object = new Main(
    "Welcome to the Full Stakhanovism Bootcamp",
    "http://static5.businessinsider.com/image/509981286bb3f70143000012-1190-625/26-tremendous-propaganda-posters-from-chinese-communists.jpg",
    "The term Stakhanovite originated in the Soviet Union and referred to workers who modelled themselves after Alexey Stakhanov. These workers took pride in their ability to produce more than was required, by working harder and more efficiently. The Stakhanovite Movement was encouraged due to the idea of socialist emulation. It began in the coal industry but later spread to many other industries in the Soviet Union. Today, as competition becomes more and more fierce in the Tech industry, follow our bootcamp and become a Full Stack Stakhanovite Engineer"
  );
  constructor() {}

  ngOnInit() {}
}

class Main {
  constructor(
    public title: string,
    public imageUrl: string,
    public description: string
  ) {}
}
