import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-photo',
  templateUrl: './my-photo.component.html',
  styleUrls: ['./my-photo.component.css']
})
export class MyPhotoComponent implements OnInit {

  constructor() { }


  photos: Array<Object> = [{
      id: 1,
      image: "http://www.mescoloriages.com/imagier/images/taureau.jpg",
      description:'Nacimiento'
  },{
      id: 2,
      image:"http://www.mescoloriages.com/imagier/images/taureau.jpg",
      description: 'bautizo'
  },{
      id: 3,
      image: "http://www.mescoloriages.com/imagier/images/taureau.jpg",
      description: 'comunion'
  }];

  ngOnInit() {
  }

}
