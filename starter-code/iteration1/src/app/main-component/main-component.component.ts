import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor() { }
  article: Object = {
    title : 'Belgrade, Serbia',
    image: 'http://humancities.eu/cities/belgrade/',
    description: 'Belgrade, capital and largest city of Serbia. It is located at the confluence of the Sava and Danube rivers'
  };
  ngOnInit() {
  }

}
