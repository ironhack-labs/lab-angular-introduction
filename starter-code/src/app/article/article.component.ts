import { Component, OnInit } from '@angular/core';

interface article{
  title: string;
  src: string;
  description: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, article {
  title = "IRON HACK";
  src = "http://mobileworldcapital.com/system/contents/images/article_595_contents_6763_capital_big.jpg";
  description = "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  constructor() { }

  ngOnInit() {
  }

}
