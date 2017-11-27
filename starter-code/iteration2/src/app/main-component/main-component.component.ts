import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
title = 'Obama';
url = 'https://i0.wp.com/www.losreportesdelichi.com/site//site/wp-content/uploads/2017/10/obama.jpg?w=640';
description = 'Write description here';
  constructor() { }

  ngOnInit() {
  }

}
