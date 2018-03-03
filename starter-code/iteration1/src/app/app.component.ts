import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  
  template: `
    <style>
      img{ width: 400px; height: 300px;}
      p{font: 22px; text-align: center;}
      .imagenIronhack{ float:left; margin: 5px;}
    </style>
    <div class="imagenIronhack">
      <img src="https://www.ironhack.com/0be4adcffad57cfca79dbf64b3889fc2.jpg">
      <p> Ironhack Madrid </p>
    </div>

    <div class="imagenIronhack">
      <img src="http://blog.ironhack.com/wp-content/uploads/2016/07/hectorges-54-1024x683.jpg">
      <p> Ironhack Barcelona </p>
    </div>

    <div class="imagenIronhack">
      <img src="https://cdn.evbuc.com/eventlogos/130268051/img3301128129.jpg">
      <p> Ironhack Miami </p>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
