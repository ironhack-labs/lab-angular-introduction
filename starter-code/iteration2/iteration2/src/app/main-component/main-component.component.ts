import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title = 'Lear code with angular';
  IMG = 'https://www.bienvenidoaflorida.com/wp-content/uploads/2017/05/Islas-de-Miami.jpg';

  constructor() { }

  ngOnInit() {
  }

}
