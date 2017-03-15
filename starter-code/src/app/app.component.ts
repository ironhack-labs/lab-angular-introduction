import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Image Gallery!';
  images: Array<Object> = [{
    id: 1,
    imageUrl: "https://goo.gl/FpQz2j",
    imageDescription: "Bee"
  },{
    id: 2,
      imageUrl: "https://goo.gl/2tlRwP",
    imageDescription: "Bee on red flower"
  },{
    id: 3,
    imageUrl: "https://goo.gl/bIRwd9",
    imageDescription: "Bee on white flower"
  }];
}
