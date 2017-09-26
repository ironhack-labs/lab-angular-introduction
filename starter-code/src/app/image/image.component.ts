import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  photos : Array<Object> = [
    {
      file: 'img/photo1',
      caption: 'Photo 1,'
    },{
      file: 'img/photo2',
      caption: 'Photo 2,'
    },{
      file: 'img/photo3',
      caption: 'Photo 3,'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
