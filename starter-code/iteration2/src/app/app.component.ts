import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  article = {
    title: 'Learn how to code with Ironhack',
    img: 'https://granviacapital.es/wp-content/uploads/2016/02/apartamentos-uso-turistico.jpg',
    desc: `Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?`
  };
}
