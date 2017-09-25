import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  photoList: any = [
    {caption: "kitty photo", url: "https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif"},
    {caption: "cat photo", url: "https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif"},
    {caption: "lion photo", url: "https://media.giphy.com/media/3o6wrrNFa9OH9FFRpS/giphy.gif"}
  ]
}
