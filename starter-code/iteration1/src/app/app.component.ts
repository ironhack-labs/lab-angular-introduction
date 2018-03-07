import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <style>
      img{ width: 400px; height: 300px;}
      p{font: bold italic 16px sans-serif; text-align: center; }
      .imagenIronhack{ float:left; margin: 5px;}
    </style>
    <h1>Album</h1>
    <div class="imagenIronhack">
      <img [src]="img1">
      <p> {{description1}}  </p>
    </div>

    <div class="imagenIronhack">
      <img [src]="img2">
      <p> {{description2}} </p>
    </div>

    <div class="imagenIronhack">
      <img [src]="img3">
      <p> {{description3}} </p>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
  img1: string = 'https://www.ironhack.com/0be4adcffad57cfca79dbf64b3889fc2.jpg';
  description1: string = 'Ironhack Madrid';
  img2: string = 'http://blog.ironhack.com/wp-content/uploads/2016/07/hectorges-54-1024x683.jpg';
  description2: string = 'Ironhack Barcelona';
  img3: string = 'https://cdn.evbuc.com/eventlogos/130268051/img3301128129.jpg';
  description3: string = 'Ironhack Miami';
}
