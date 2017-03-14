import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = [
    {
      'author' : "Tom",
      'date' : "today",
      'message' : "pizza"
    },
    {
      'author' : "Bob",
      'date' : "yesterday",
      'message' : "pizza?"
    }
  ];
}
