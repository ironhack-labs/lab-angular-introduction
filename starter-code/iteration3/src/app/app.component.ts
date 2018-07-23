import { Component } from '@angular/core';
import { Champion } from './nba-champions/Champion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'NBA Champions';
  champions = [
    champion1,
    champion2
  ]
}

// Data
let champion1 = new Champion(
  '2015-16',
  'Cleverland Cavaliers',
  'https://cdn.shopify.com/s/files/1/1206/8370/products/large_2647_FF2068_grande.jpg?v=1492357442',
  ['Lebron James', 'Kevin Love']
)

let champion2 = new Champion(
  '2014-15',
  'IronHack',
  'https://cdn-images-1.medium.com/max/1920/1*e35LkwPQGqxRoB4dCWCh4g.png',
  ['Beltran', 'Gabi']
)