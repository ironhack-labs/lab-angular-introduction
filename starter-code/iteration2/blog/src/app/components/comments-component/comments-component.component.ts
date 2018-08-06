import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent {
    header = 'Comments';
    comment = [
        {name: 'Bobby Tables', date: Date.now(), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu vehicula quam, sed ultrices lorem. Vestibulum euismod, nibh pulvinar interdum sollicitudin, magna eros efficitur quam, tristique interdum arcu eros nec.'},
        {name: 'Ironhack School', date: Date.now(), content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu vehicula quam, sed ultrices lorem. Vestibulum euismod, nibh pulvinar interdum sollicitudin, magna eros efficitur quam, tristique interdum arcu eros nec.'}
    ]

  constructor() { }
}
