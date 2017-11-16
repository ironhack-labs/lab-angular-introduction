import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is my photo album!';
  album: Array<Object> = [
    {
      id: 1,
      src: 'https://www.elemis.com/us/media/catalog/product/cache/7/image/1800x/040ec09b1e35df139433887a97daa66f/1/0/1006906.jpg',
      description: 'Pro-Collagen Marine Cream 50ml'
    }, {
      id: 2,
      src: 'https://www.elemis.com/us/media/catalog/product/cache/7/image/1800x/040ec09b1e35df139433887a97daa66f/p/r/pro-collagen_oxygenating_night_cream_master_v5_rgb_web_v2.jpg',
      description: 'Pro-Collagen Oxygenating Night Cream 50ml'
    }, {
      id: 3,
      src: 'https://www.elemis.com/us/media/catalog/product/cache/7/image/1800x/040ec09b1e35df139433887a97daa66f/p/r/pro-collagen-cleansing-balm.jpg',
      description: 'Pro-Collagen Cleansing Balm 200g'
    }
  ];
}
