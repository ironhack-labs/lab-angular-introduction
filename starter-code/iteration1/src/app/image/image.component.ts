import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  title1 = 'IRONHACK';
  image1 = 'http://blog.ironhack.com/wp-content/uploads/2017/01/best-coding-botcamp-ironhack-student-podcast-blog-header.jpg';
  title2 = 'IRONHACK BOSS';
  image2 = 'http://blog.ironhack.com/wp-content/uploads/2017/05/esade-ironhack-coding-bootcamp-partnership.jpg';
  title3 = 'IRONHACKERS'
  image3 = 'http://e01-expansion.uecdn.es/assets/multimedia/imagenes/2017/06/20/14979611169142.jpg';
  constructor() { }

  ngOnInit() {
  }

}
