import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blah-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  exampleArticle = new Article(
    "Learn how to code with Ironhack",
    "../../../assets/paris.jpg",
    "Cool description coming here!"
  );
  
  constructor() { }

  ngOnInit() {
  }

}

export class Article {
  constructor(
    public title: string,
    public image: string,
    public description: string
  ) {}
}
