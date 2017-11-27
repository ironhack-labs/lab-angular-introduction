import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent implements OnInit {
  comment1 = {
    commenter: "fucker",
    comment: "fuckyoubitch"
  };
  comment2 = {
    commenter: "themaderpenetrator",
    comment: "fuckyoutimes100000000bitch"
  };

  constructor() {}

  ngOnInit() {}
}
