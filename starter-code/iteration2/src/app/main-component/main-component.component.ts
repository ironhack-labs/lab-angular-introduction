import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title : string;
  image: string;
  description: string;

  constructor() {
    this.title = 'Learn how to code with Ironhack';
    this.image = 'https://t-ec.bstatic.com/images/hotel/max1024x768/891/89199439.jpg';
    this.description = 'Lorem ipsum dolor amet waistcoat palo santo hella trust fund, fanny pack woke fixie gastropub chartreuse schlitz jianbing dreamcatcher tbh copper mug beard. Crucifix artisan shoreditch raw denim selvage, tumeric brooklyn affogato lomo. Polaroid succulents typewriter thundercats palo santo farm-to-table. Shaman microdosing PBR&B pabst dreamcatcher DIY direct trade thundercats. Chillwave gluten-free helvetica cred, blog waistcoat VHS photo booth af quinoa swag. Tofu artisan wolf ethical marfa woke disrupt neutra affogato. Trust fund leggings af cloud bread hammock.';
  }

  ngOnInit() {
  }

}


