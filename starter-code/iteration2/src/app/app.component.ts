import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Articles';

  articles: Array<Article> = [
    new Article("Learn how to code with IronHack", "https://www.planetware.com/photos-large/F/france-cannes-day-trips-monaco.jpg", "Blaaaaaaah blaaaaaah blaaaah blaaaaah ")
  ]
}

class Article {
  constructor(
    public title: string, 
    public image: string,
    public description: string
  ){}
}
