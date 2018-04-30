import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo album';

  pictures = [
    {
      url: "tiger.jpg",
      comment: "A tiger"
    },
    {
      url: "lamb.jpg",
      comment: "A lamb"
    },
    {
      url: "puppy.jpg",
      comment: "A puppy"
    }
  ]
}
