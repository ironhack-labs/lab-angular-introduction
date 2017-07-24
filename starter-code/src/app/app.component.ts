import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // ITERATION 1
  title: string = 'Angular Intro';
  photos: Array<Object> = [
    {
      id: 1,
      path: '../assets/images/madrid.jpg',
      description: 'Ironhack Madrid'
    },
    {
      id: 2,
      path: '../assets/images/barcelona.jpg',
      description: 'Ironhack Barcelona'
    },
    {
      id: 3,
      path: '../assets/images/madrid.jpg',
      description: 'Ironhack Miami'
    },
  ];


  // ITERATION 2
  article: Object = {
    title: 'Learn how to code with Ironhack',
    image: '../assets/images/miami2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' }
}
