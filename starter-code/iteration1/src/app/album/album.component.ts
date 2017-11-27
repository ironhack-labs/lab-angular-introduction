import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  imageDetail = [{
    img:"https://cde.publimetro.e3.pe/ima/0/0/0/1/7/17094.jpg",
    description:"Alumni studing",
  },
  {
    img:"https://www.tucucu.com/wp-content/uploads/2015/06/alumno-estudiando-estudiante.jpg",
    description:"Alumni ",
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBihU-8TWQ6hu-ZyIxQzCSjI1hcAYGPGTQsvTojh7RsTVER1Hwg",
    description:"studing",
  }];

  constructor() { }
  ngOnInit() {
  }
}
