import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comments-component",
  templateUrl: "./comments-component.component.html",
  styleUrls: ["./comments-component.component.css"]
})
export class CommentsComponentComponent implements OnInit {
  constructor() {}

  comments: Array<Object> = [
    {
      name: "Edward",
      date: "08/01/2018",
      text: "I am rambling."
    },
    {
      name: "John",
      date: "08/02/2018",
      text: "Excellent point, sir. I too get delusional when I have to create fake dialog."
    }
  ]

  ngOnInit() {}
}
