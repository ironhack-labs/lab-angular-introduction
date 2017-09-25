import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './iteration-1.component.html',
  styleUrls: ['./iteration-1.component.css']
})
export class Iteration1Component implements OnInit {
  images = [
    {
      img: "https://previews.123rf.com/images/erwinova/erwinova1002/erwinova100200060/6648345-Buffet-foood--Foto-de-archivo.jpg", description:"food"},
{
  img:  "http://housewifeworld.com/wp-content/uploads/2016/06/Cookie-Taco-Dessert-featured.jpg", description:"food2"},
{
  img:"http://data.whicdn.com/images/105131091/superthumb.jpg", description:"food3"}
];
  constructor() { }

  ngOnInit() {
  }

}
