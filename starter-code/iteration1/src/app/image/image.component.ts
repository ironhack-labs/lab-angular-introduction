import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image1 = 'http://delpozoaluniverso.com/wp-content/uploads/2017/07/ironhack-6-semana-segundo-proyecto-585x390.jpeg';
  image2 = 'https://www.ironhack.com/assets/images/courses/frontend-course-1.jpg';
  image3 = 'https://www.ironhack.com/assets/images/courses/front-end-course-3.jpg';
  title1 = 'Ironhack Madrid';
  title2 = 'Ironhack Barcelona';
  title3 = 'Ironhack Miami';
  constructor() { }

  ngOnInit() {
  }

}
