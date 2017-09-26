import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  title: string = "Hola qué tal";
  image: string = "https://k39.kn3.net/246D35BBA.jpg";
  description: string = "Buenos días"

  constructor() { }

  ngOnInit() {
  }

}
