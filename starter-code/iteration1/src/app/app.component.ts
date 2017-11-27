import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Where you want to travel?';
  images: Array<object> = [{
    imgUrl: "https://images7.alphacoders.com/411/thumb-1920-411820.jpg",
    description: "Dinamarca"
  },{
    imgUrl: "http://www.wallpapereast.com/static/images/Hawaii-Beach-Wallpaper-HD_kgppCjh.jpg",
    description: "Caribe"
  },{
    imgUrl: "https://www.hdwallpapers.in/walls/bicycle-wide.jpg",
    description: "Paris"
  }];
  maxWidth = '200';
}
