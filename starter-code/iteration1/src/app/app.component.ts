import { Component } from '@angular/core';

@Component({
  selector: 'photo-reel',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Our Adventures';

  myPhotos: any[] = [
      {
        title: "Talking in Toronto",
        imageUrl: "https://media.giphy.com/media/yPhqlJccIOaru/giphy.gif"
      },
      {
        title: "Diva-ing in Denver",
        imageUrl: "https://media.giphy.com/media/cMw0qTJjnFXeE/giphy.gif"
      },
      {
        title: "Running in Rhode Island",
        imageUrl: "https://media.giphy.com/media/7kn27lnYSAE9O/giphy.gif"
      }
  ]


}
