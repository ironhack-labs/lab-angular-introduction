import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "GIF Album";
  gifArray = [
    {caption: 'Mondays be like...', url: 'https://media.giphy.com/media/vguRpQzGag7M5h4UVt/giphy.gif'},
    {caption: 'Tuesdays be like...', url: 'https://media.giphy.com/media/xT9IgoiyvYeTLbBqxO/giphy.gif'},
    {caption: 'Wednesdays be like...', url: 'https://media.giphy.com/media/Qw4X3Fnt8MzvrCxmBLG/giphy.gif'},
  ]
}
