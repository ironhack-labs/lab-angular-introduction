import { Component, OnInit } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
