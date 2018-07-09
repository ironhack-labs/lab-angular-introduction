import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comments-component",
  templateUrl: "./comments-component.component.html",
  styleUrls: ["./comments-component.component.css"]
})
export class CommentsComponentComponent implements OnInit {
  comments: Array<Comment> = [
    { name: "Manelle", description: "Ironhack is coool" },
    { name: "Class", description: "It's so cold hereeee!" }
  ];

  constructor() {}

  ngOnInit() {}
}

class Comment {
  name: String;
  // date: Date;
  description: String;
}
