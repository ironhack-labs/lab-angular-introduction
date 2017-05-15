import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',

  template: `
            <div class="main">
              <div *ngFor="let photo of photos">
                  <h2>{{photo.name}}</h2>
                  <img class="thumbnail" src={{photo.url}}>
              </div>
            </div>`,
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  photos = [{
    url:"https://st3.idealista.com/news/archivos/2016-05/barcelona_alquiler.jpg?sv=4-OB9KSR",
    name: "Barcelona",
  },
    {
      url: "http://edinburgh.org/media/743198/Cityscape.jpg",
      name: "Edinbrugh",
    },
   {
     url: "http://www.aseischool.it/wp-content/uploads/2017/03/Tokyo2.jpg",
     name: "Tokyo",
   }
];
  constructor() { }

  ngOnInit() {
  }

}
