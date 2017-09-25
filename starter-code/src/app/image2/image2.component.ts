import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image2',
  templateUrl: './image2.component.html',
  styleUrls: ['./image2.component.css']
})
export class Image2Component implements OnInit {
  url: string = 'https://i.pinimg.com/736x/ea/e1/0d/eae10df90ec2bdb39a603bf906ccbade--hermanos-marx-brother.jpg';
  description: string = "Chico Marx";
  constructor() { }

  ngOnInit() {
  }

}
