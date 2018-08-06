import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})

export class MainComponentComponent {

  constructor() { }
  title = 'Learn how to code with Ironhack'
  mainImage = 'http://www.secretosdemadrid.es/wp-content/uploads/2017/03/IMG_2669-1078x516.jpg';
  mainText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic animi quam adipisci facilis! Voluptas molestiae enim vel quidem at! Quisquam veniam dolorem repellendus obcaecati beatae ut tempore libero optio.';

}
