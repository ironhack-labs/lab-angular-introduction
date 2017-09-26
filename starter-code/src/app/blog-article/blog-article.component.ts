import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css']
})
export class BlogArticleComponent implements OnInit {
  title:string = 'Learn how to code with IronHack'
  imgSrc:string = 'https://cdn.thinglink.me/api/image/661234398170972161/1240/10/scaletowidth'
  imgAlt:string = 'Madrid'
  description:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum felis ut nunc pulvinar, eu facilisis lectus molestie. Nunc vel consectetur eros, non condimentum risus. Maecenas ornare id odio sit amet posuere. Etiam dignissim cursus ultrices. Nunc fringilla, justo ac tincidunt feugiat, nisi odio elementum libero, a scelerisque odio magna eget nunc. Nam ornare iaculis eros. Vestibulum justo erat, luctus at libero in, feugiat lobortis nisi. Morbi at lacinia orci. Suspendisse commodo nisi vitae finibus vehicula.'

  constructor() { }

  ngOnInit() {
  }

}
