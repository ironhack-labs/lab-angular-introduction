import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  images = [
    {src: '../assets/img/people1.jpg', description: 'People1'},
    {src: ' ../assets/img/people2.jpeg', description: 'People2'},
    {src: '../assets/img/people3.jpeg', description: 'People3'},

  ]
}
