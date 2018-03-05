import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
  <div class="container">
    <h1>{{ title }}</h1>
    <img src="{{ image }}" alt="" />
    <p>{{ description }}</p>
    <app-comments></app-comments>
  </div>
  `,
  styles: [`
  .container {text-align: center; width: 50%; padding-left: 25%}
  img {width: 500px;}
  `]
})
export class AppComponent {
  title = 'Learn how to code with Ironhack!';
  image = '/assets/images/building.jpg'
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum volutpat diam eu consequat. Vestibulum blandit sit amet mi eu viverra. In sit amet mollis arcu. Ut commodo ex ac pulvinar hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est ligula, placerat vitae velit et, pretium tincidunt eros. Integer ac viverra elit. Aenean efficitur lorem nulla, a auctor mi fringilla vitae. Integer quis laoreet enim. Sed turpis arcu, porttitor vel orci non, dapibus tincidunt neque.';
}
