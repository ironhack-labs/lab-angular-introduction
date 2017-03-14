import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    'https://media.giphy.com/media/j9lg3FZ52xOVO/giphy.gif',
    'https://media.giphy.com/media/IyrRSLm3BUNW/giphy.gif',
    'https://media.giphy.com/media/o9ggk5IMcYlKE/giphy.gif'
  ];
  messages = [
    'bam',
    'bambam',
    'wowza'
  ];
}
