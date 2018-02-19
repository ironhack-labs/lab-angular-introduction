import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Main Section';
  mainContent = {
    img:'../../assets/img/faro.jpeg',
    title: 'Documentation and examples for opting images into responsive behavior',
    description:'Images in Bootstrap are made responsive with .img-fluid. max-width: 100%; and height: auto; are applied to the image so that it scales with the parent element. In Internet Explorer 10, SVG images with .img-fluid are disproportionately sized. To fix this, add width: 100% \9; where necessary. This fix improperly sizes other image formats, so Bootstrap doesn’t apply it automatically.'
  }
  constructor() { }

  ngOnInit() {
  }

}
