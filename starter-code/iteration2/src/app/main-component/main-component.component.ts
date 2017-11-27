import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title = 'Family Guy';
  url = 'http://jobbmintatv.hu/borito/Family_Guy_7_evad_8_resz.jpg';
  description = 'The best family of the TV';
  constructor() { }

  ngOnInit() {
  }
}
