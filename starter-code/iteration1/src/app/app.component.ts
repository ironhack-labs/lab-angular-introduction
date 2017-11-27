import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  imageURL: Array<string> = ["https://d36tnp772eyphs.cloudfront.net/blogs/1/2015/04/mt-cook1-940x623.jpg", "http://mymodernmet.com/wp/wp-content/uploads/2017/04/takashi-komatsubara-japan-16.jpg", "http://www.wallpaperawesome.com/wallpapers-awesome/wallpapers-landscapes-mountains-sea-lakes-awesome/wallpaper-amazing-landscape-patagonia.jpg"];
  place: Array<string> = ["New Zeland", "Japan", " or Argentina?"]
}
