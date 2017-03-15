import { Component } from '@angular/core';

@Component({
  selector:               'app-root',
  templateUrl:            './app.component.html',
  styleUrls:              ['./app.component.css']
})
                    
export class AppComponent {
  title                 = 'Photo Album';
  img1                  = `http://lorempixel.com/400/201/`;
  img2                  = `http://lorempixel.com/400/200/`;
  img3                  = `http://lorempixel.com/400/199/`;
  captions              = ['Image 1', 'Best Photo', 'Not the Best Photo'];
  images                = [
    {img: `http://lorempixel.com/400/201/`, caption: 'Image 1'},
    {img: `http://lorempixel.com/400/200/`, caption: 'Best Photo'},
    {img: `http://lorempixel.com/400/199/`, caption: 'Not the Best Photo'}
  ];

}
