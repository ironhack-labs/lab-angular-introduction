import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent implements OnInit {
  commentsList: Array<Object> = [
    { author: "Ricky Bob", text: "I am a ghost in the internet." },
    { author: "Ayame Chan", text: "Kawai!" },
    { author: "TJ", text: "Resident code badass." }
  ];

  constructor() {}

  ngOnInit() {}
}
