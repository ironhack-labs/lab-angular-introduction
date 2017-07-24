import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  photos : Array<Object> = [
    {
      file: 'img/photo1',
      caption: 'Photo 1, no se ve porque angular no quiere servirme los estáticos'
    },{
      file: 'img/photo2',
      caption: 'Photo 2, tampoco se ve'
    },{
      file: 'img/photo3',
      caption: 'Photo 3, nada hijo no hay manera'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
