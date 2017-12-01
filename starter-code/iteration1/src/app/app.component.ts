import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myPhotos: any[] = [
    {title: "Josh Doctson", imageUrl: "https://media.giphy.com/media/3o6fJ2qEfmMyReMeze/giphy.gif"},
    {title: "Mesut Ozil", imageUrl: "https://media.giphy.com/media/l4EoRYGfdkJyhlVQs/giphy.gif"},
    {title: "Alexander Barkov", imageUrl: "https://media.giphy.com/media/k0sxK4LPW9H2w/giphy.gif"}
  ]
}
