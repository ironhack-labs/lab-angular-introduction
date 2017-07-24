import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title: string = 'Learn how to code with ironhack';
  src: string = 'https://tctechcrunch2011.files.wordpress.com/2015/04/codecode.jpg';
  description: string = 'If you don’t know the first thing about coding, you’ve come to the right place. We’ve put together a beginner’s tutorial which will give you all the background information you need on coding, before you start learning it for real.';

  constructor() { }

  ngOnInit() {
  }

}
