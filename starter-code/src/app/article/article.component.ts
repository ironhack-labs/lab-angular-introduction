import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent {
  constructor() { }
  title: string = 'Article title';
  src: string = './assets/images/angular.jpg';
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos delectus nostrum magni, assumenda consequatur reprehenderit, placeat vitae iusto eveniet harum necessitatibus voluptas perspiciatis quasi sunt numquam quia optio. Porro, quas!';
}
