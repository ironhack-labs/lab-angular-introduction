import { Component, OnInit, Input } from '@angular/core';

import { Article } from './Article';
import { Comment } from '../comments/Comment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  @Input() article: Article;

  ngOnInit() {
  }

  createComment(){
    let name = document.getElementById('name').value;
    let content = document.getElementById('content').value;

    this.article.addComment(new Comment(name, content))

    document.getElementById('name').value = "";
    document.getElementById('content').value = "";
  }

}
