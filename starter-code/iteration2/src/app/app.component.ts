import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Article with comments';
  article = [
  {title: 'New York', image: '../assets/newyork.jpg', description: 'Mauris eleifend diam vehicula orci tincidunt, in ornare elit.'},
  {title: 'Chicago', image: '../assets/chicago.jpg', description: 'Etiam ac lectus leo. Cras eget imperdiet tellus, at lacinia felis.'},
  {title: 'Seattle', image: '../assets/seattle.png', description: 'Mauris interdum facilisis velit ut viverra.'}];
}
