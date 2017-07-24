import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  cover: string = "http://a1.odistatic.net/images/landingpages/vacation/1920x800/madrid_1920x800.jpg";

  constructor() { }

  ngOnInit() {
  }

}
