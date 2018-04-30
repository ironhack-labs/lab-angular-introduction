import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent {

  name: Array<string>;
  content: Array<string>;

  constructor() {
    this.name = ['Bobby Bagles'];
    this.content = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eu purus convallis semper. Maecenas sit amet dui scelerisque, interdum erat at, rutrum orci.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eu purus convallis semper. Maecenas sit amet dui scelerisque, interdum erat at, rutrum orci.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eu purus convallis semper. Maecenas sit amet dui scelerisque, interdum erat at, rutrum orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eu purus convallis semper. Maecenas sit amet dui scelerisque, interdum erat at, rutrum orci.']];
  }
}
