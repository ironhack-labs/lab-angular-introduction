import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  constructor() { }
  article: Object = {
    title: 'Beautiful Rio',
    path: './assets/img1.jpeg',
    desc: 'From sexy Ipanema and Copacabana, to more secluded and slightly lesser-k.'
  };
  ngOnInit() {
  }

}
