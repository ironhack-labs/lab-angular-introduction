import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ironhackMadrid = new PhotoCard("http://blog.ironhack.com/wp-content/uploads/2018/11/madrid.jpg", "Ironhack Madrid")
  ironhackBarcelona = new PhotoCard("https://www.ironhack.com/7cf6338ea059170fd98b01f4db9629a9.jpg", "Ironhack Barcelona")
  ironhackMiami = new PhotoCard("https://www.ironhack.com/370680c403f3a3d4a29149716547e25f.jpg", "Ironhack Miami")
}

class PhotoCard {
  img: string = ''
  description: string = ''
  constructor(imgUrl: string, description: string) {
    this.img = imgUrl
    this.description = description
  }
}
