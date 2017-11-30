import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kitty Photo Album';

  myPhotos: any[] = [
    {
      imageUrl: "https://media.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif",
      description: "Super cute kitty stretching."
    },
    {
      imageUrl: "https://media.giphy.com/media/LNisSS34qHwcg/giphy.gif",
      description: "Super cute kitty meowing on a piggy pillow."
    },
    {
      imageUrl: "https://media.giphy.com/media/K1wjOn6HImv7y/giphy.gif",
      description: "Super cute kitty yawning."
    }
  ]

}
