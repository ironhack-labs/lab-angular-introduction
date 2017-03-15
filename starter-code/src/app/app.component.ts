import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Photo Album!';

  currentPage = 'home';

  changeToHome () {
    this.currentPage = 'home';
  }

  changeToArticle () {
    this.currentPage = 'article';
  }
}
