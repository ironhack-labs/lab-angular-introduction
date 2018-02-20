import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My Pictures';
  images: Array<object> = [
    {
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThatBsk8B02IWHVE5gWAdA8-O4PeNnscFPJfw56Ex1urcUEOHsCA",
      description: 'mammal'
      
    }, {
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzYtUxnDoKOd5Oax7j75nXwDD1_nS2x8YqYT2OmO540_XUK_W0w",
      description: 'oviparous'
      
    }, {
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISdTDT1HqNFNzVzf3GRS3OOtpYjz9-CakeV1ofIEHeOjtkTY7xg",
      description: 'mammal'
      
    }
  ];
}
