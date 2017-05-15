import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:
    `<div class="container">
    <app-main></app-main></div>
    <div class="container"><app-comments></app-comments></div>`
})
export class AppComponent {

}
