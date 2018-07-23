import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo album';
  album = [{
    description: 'hehehehehhe',
    src: 'https://media.giphy.com/media/MMpZTGSJn2eHu/giphy.gif'
  }, {
    description: 'hello :)',
    src: 'https://media.giphy.com/media/euGbFwjPheITm5pCQC/giphy.gif'
  }, {
    description: 'Because I can',
    src: 'https://media.giphy.com/media/5UCo6K44H3msPIUORS/giphy.gif'
  }]
}
