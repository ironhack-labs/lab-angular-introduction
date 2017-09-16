import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'images-album',
  templateUrl: './images-album.component.html',
  styleUrls: ['./images-album.component.css']
})
export class ImagesAlbumComponent implements OnInit {
  quotes: Array<any> = [
    {
      id: "1",
      url: "http://www.barcinno.com/wp-content/uploads/2016/05/rsz_img_8767.jpg",
      body: "Bacelona"
    },
    {
      id: "2",
      url: "https://i.stack.imgur.com/Ohks2.jpg",
      body: "Madrid"
    },
    {
      id: "3",
      url: "https://pbs.twimg.com/media/DBKsHZkXgAAXANq.jpg",
      body: "Miami"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
