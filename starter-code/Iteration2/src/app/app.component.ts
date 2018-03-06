import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-main-component></app-main-component>
  <app-comments-component></app-comments-component>
  `,
})
export class AppComponent {
  title = 'app';
}
