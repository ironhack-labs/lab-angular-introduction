import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World Cup Favorites!';

  myAlbum: any[] =[
    {
      imageUrl: "https://media.giphy.com/media/3o6gEaYbewKku0GwPS/giphy.gif",
      description: "France"
    },
    {
      imageUrl: "https://media.giphy.com/media/ym4YttqYt6WwU/giphy.gif",
      description: "Germany"
    },
    {
      imageUrl: "https://media.giphy.com/media/u1zLnbcenLaxy/giphy.gif",
      description: "Spain"
    }
  ]
}
