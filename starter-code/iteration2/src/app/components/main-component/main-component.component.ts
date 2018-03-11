import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
title: string = 'Learn how to code';
image: string = 'http://lorempixel.com/800/500';
  constructor() { }

  ngOnInit() {
  }

}
