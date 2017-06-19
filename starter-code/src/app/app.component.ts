import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iteration 1: Album of Animals doing SCARY things';
  album =
  [
    { text: 'Breaching Sharks',     imgURL: 'https://i.imgur.com/dF2AY41.jpg'},
    { text: 'Hungry Hungry Hippos', imgURL: 'http://i.telegraph.co.uk/multimedia/archive/03071/Hippo-Attacks-Boat_3071856b.jpg'},
    { text: 'Elephants Playing',   imgURL: 'http://i.imgur.com/jvsi7Cx.jpg'},
  ];
}
