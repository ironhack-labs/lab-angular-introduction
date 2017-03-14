import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn with Ironhack';
  description = `
    text text text text text text text text text text text text text text text text text text text
    text text text text text text text text text text text text text text text text text text text text text text text text
    text text text text text text text text text text text text text text text text text text text text text text text text
    text text text text text text text text text text text text text text text text text text text text text text text
    text text text text text text text text text text text text text text text text text text text text text text text
`;
  image = "https://media.giphy.com/media/jiv3km2dt7Fg4/giphy.gif";
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
