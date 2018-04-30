import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title: string = 'Motorbike';
  about: Array<Object> = [
   {src:'http://chromeit.co.za/wp-content/uploads/2016/05/Glow-In-The-Dark-Motorbikes-Gallery-Image-7.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu neque lectus. Vestibulum in felis eget turpis mollis malesuada sed ac elit. Aliquam tincidunt mi a ante pharetra facilisis. Donec augue justo, scelerisque quis mollis non, finibus nec augue. Praesent mi ligula, varius quis feugiat vitae, placerat porta mauris. Nullam placerat suscipit vehicula. Nunc scelerisque venenatis nibh, quis convallis tellus finibus eu. Phasellus dignissim neque in nisi pretium, a scelerisque orci aliquam.'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
