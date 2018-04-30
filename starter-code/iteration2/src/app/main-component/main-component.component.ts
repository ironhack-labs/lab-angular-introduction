import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title: string ='MAY THE 4Th';
  img: string = 'https://www.lafinestradigital.com/2015/12/08/benvinguts-a-lunivers-star-wars/';
  description: string = `Star Wars is an American epic space opera media franchise, centered on a film series created by George Lucas.
  It depicts the adventures of characters "a long time ago in a galaxy far, far away".`
  constructor() {
    
   }

  ngOnInit() {
  }

}
