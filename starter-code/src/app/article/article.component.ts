import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title : string;
  description: string;
  image : Object;
  
  constructor() { 
    this.title = "Title";
    this.description = "lorem ipsum dolor";
    this.image = {
      alt : "alt",
      url : "http://fakeimg.pl/1600x200/"
    }
    
  }

  ngOnInit() {
  }

}
