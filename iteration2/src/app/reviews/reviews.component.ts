import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  comments: Array<any> = [{author: "Homer Simpson", text:"Donuts rule!!", time:"16/07/2017 16:50"},
              {author: "Ned Flanders", text:"Okyly dokyly", time:"10/07/2017 13:50"},
              {author: "Bart Simpson", text:"Ay carramba!!", time:"5/07/2017 11:50"}];

  constructor() { }

  ngOnInit() {
  }

}
