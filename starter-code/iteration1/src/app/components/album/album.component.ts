import { Component, OnInit } from '@angular/core';

import { Photo } from '../../shared/models/album.model';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  album: Array<Photo> = [

    {
      image: "assets/img/iteration1/madrid.jpg",
      title: 'Ironhack Madrid'
    },

    {
      image: "assets/img/iteration1/barcelona.jpg",
      title: 'Ironhack Barcelona'
    },

    {
      image:"assets/img/iteration1/miami.jpg",
      title: 'Ironhack Miami'
    }
  ];

}
