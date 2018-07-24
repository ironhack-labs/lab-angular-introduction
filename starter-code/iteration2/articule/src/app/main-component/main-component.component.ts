import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  img = 'https://hipertextual.com/files/2018/07/brian-may-670x410.jpeg'
  text = 'Primer Articulo'

  constructor() { }

  ngOnInit() {
  }

}
