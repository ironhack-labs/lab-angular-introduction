import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blog-article",
  templateUrl: "./blog-article.component.html",
  styleUrls: ["./blog-article.component.css"]
})
export class BlogArticleComponent implements OnInit {
  secondarySection = new Secondary("Comments", "form");

  constructor() {}

  ngOnInit() {}
}

export class Secondary {
  constructor(public name: string, public form: string) {}
}
