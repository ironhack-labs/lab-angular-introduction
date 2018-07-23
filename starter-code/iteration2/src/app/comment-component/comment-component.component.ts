import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comment-component",
  templateUrl: "./comment-component.component.html",
  styleUrls: ["./comment-component.component.css"]
})
export class CommentComponentComponent implements OnInit {
  comment = [
    {
      name: "Pepe",
      date: "02/01/2018",
      description: "Que bonito"
    },
    {
      name: "Juan",
      date: "23/04/2018",
      description: "Que bien"
    },
    {
      name: "Jose",
      date: "30/06/2018",
      description: "Que divertido"
    },
  ];
  constructor() {}

  ngOnInit() {}
}
