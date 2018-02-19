import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:
  `
  <app-maincomponent></app-maincomponent>
  <app-commentscomponent></app-commentscomponent>
  `
})
export class AppComponent {
  title = 'comment lister';
}

