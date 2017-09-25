import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration1',
  templateUrl: './iteration1.component.html',
  styleUrls: ['./iteration1.component.css']
})
export class Iteration1Component implements OnInit {
  title = 'Iteration 1';
  imgHeight = 200;
  cards: Array<Object> = [
    {
      url: 'http://ironmaiden.com/media/discography/thumbnail/album-piece-of-mind.jpg',
      text: 'Iron Maiden'
    },
    {
      url: 'https://a3-images.myspacecdn.com/images03/31/57af6615d7cf4c33ba9812bd5913e255/600x600.jpg',
      text: 'Helloween'
    },
    {
      url: 'https://images-na.ssl-images-amazon.com/images/I/81uQ5owjZiL._SL1200_.jpg',
      text: 'Turisas'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
