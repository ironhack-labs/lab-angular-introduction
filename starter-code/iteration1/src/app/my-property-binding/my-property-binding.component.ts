import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-property-binding',
  template: `<img [src]="myImageSource" />`,
  templateUrl: './my-property-binding.component.html',
  styleUrls: ['./my-property-binding.component.css']
})
export class MyPropertyBindingComponent {
  myImageSource: string = 'http://placekitten.com/g/300/300';
  constructor() { }

  ngOnInit() {
  }

}
