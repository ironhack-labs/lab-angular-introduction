import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn to code with ironhack';
  images: Array<Object> = [
    {
      image: 'https://assets4.domestika.org/job-covers/000/042/274/42274-original.png?1470139235',
      description: 'Welcome to IronHack'
    },
    {
      image: 'https://assets4.domestika.org/job-covers/000/042/274/42274-original.png?1470139235',
      description: 'Welcome to IronHack'
    },




  ];
}
