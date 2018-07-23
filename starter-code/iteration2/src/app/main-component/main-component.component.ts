import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title = "La Pilarica"
  description = "djgfhaerhgeakljhrtqbertqejrgklbverjgtqe";
  img = "http://canalviajes.com/wp-content/uploads/zaragoza-590x392.jpg"  
  constructor() { }

  ngOnInit() {
  }

}
