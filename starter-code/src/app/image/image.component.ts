import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  url: String = "http://www.barcinno.com/wp-content/uploads/2016/05/rsz_img_8767.jpg"
  body: String = "Barcelona"
  constructor() { }

  ngOnInit() {
  }

}
