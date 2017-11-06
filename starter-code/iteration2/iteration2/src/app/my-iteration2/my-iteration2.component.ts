import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-iteration2',
  templateUrl: './my-iteration2.component.html',
  styleUrls: ['./my-iteration2.component.css']
})
export class MyIteration2Component implements OnInit {


smilyFace: string = "http://www.nesta.org.uk/sites/default/files/yellow_happy.jpg";
comment: String = "";

 onKey(value) {}

  constructor() { }

  ngOnInit() {
  }

}
