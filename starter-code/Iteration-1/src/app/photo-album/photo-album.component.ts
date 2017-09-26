import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent implements OnInit {
  title = 'Photos';

  pictures = [
  {
  src: "/assets/pexels-photo.jpg",
  caption: "Construction Worker 1"
  },
  {
  src: "/assets/pexels-photo-585418.jpg",
  caption: "Construction Worker 2"
  },
  {
  src: "/assets/pexels-photo-585419.jpg",
  caption: "Construction Worker 3"
  }
];

  constructor() { }

  ngOnInit() {
  }

}
