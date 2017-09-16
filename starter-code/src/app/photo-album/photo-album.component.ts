import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent implements OnInit {
  photos: Array<any> = [{
    id: 1,
    title: 'Luigi',
    text: 'Walk as if you are kissing the Earth with your feet.',
    image: '../images/Luigi-PNG-Photos.png'
  }, {
    id: 2,
    title: 'Mario',
    text: 'Life is a journey. Time is a river. The door is ajar.',
    image: '../images/maxresdefault.png'
  }, {
    id: 3,
    title: 'Wario',
    text: 'Simplicity is the ultimate sophistication.',
    image: '../images/WARIUSA.png'
  }];
  constructor() { }

  ngOnInit() {
  }

}
