import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comments-component",
  templateUrl: "./comments-component.component.html",
  styleUrls: ["./comments-component.component.css"]
})
export class CommentsComponentComponent implements OnInit {
  comments: Array<Comment> = [
    {
      author: "Arthur",
      date: new Date(2018, 1, 1),
      content: "Whaouh, your website looks amazing!"
    },
    {
      author: "Lucas",
      date: new Date(2018, 1, 1),
      content: "I agree, good job!"
    },
    {
      author: "Marie",
      date: new Date(2018, 1, 1),
      content: "Thanks guys, I apreciate."
    }
  ];
  constructor() {}

  ngOnInit() {}
}

class Comment {
  author: string;
  date: Date;
  content: string;
}
