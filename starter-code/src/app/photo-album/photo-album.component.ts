import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent implements OnInit {

  constructor() { }
    player1 = `Michael Jordan`;
    player2 = `Lebron James`;
    player3 = `Kobe Bean Bryant`;

  ngOnInit() {
  }

}
