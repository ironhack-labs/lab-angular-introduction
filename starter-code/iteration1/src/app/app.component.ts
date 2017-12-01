import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  album: any[] = [
    {
      title: "Ironhack Madrid",
      imageURL: "https://media1.giphy.com/media/xUA7aZ4CFUpiLL5v2w/200.webp#3-grid1",
    },
    {
      title: "Ironhack Barcelona",
      imageURL: "https://media2.giphy.com/media/xUA7aT4k7JLXH71zG0/200.webp#1-grid1",
    },
    {
      title: "Ironhack Miami",
      imageURL: "https://media0.giphy.com/media/3o85xn9obKNN5RvIk0/200.webp#1-grid1",
    }
  ]
  title = 'Photo Gallery!';
}
